import { ApiError } from '@Error/ApiError';
import { useCallback, useEffect, useState } from 'react';
import { API_STATUS } from '@Constants/index';
import { SERVER_MESSAGE } from '@Constants/server';
import { apiStutus } from '@Types/index';

type responseCallback = () => Promise<Response>;

interface fetchProps {
  fetchFn?: responseCallback;
}

interface useFetchProps extends fetchProps {
  suspense?: boolean;
  mockTest?: boolean;
}

const useFetch = <R,>({
  fetchFn,
  suspense = false,
  mockTest = false,
}: useFetchProps) => {
  const [promise, setPromise] = useState<Promise<void>>();
  const [data, setData] = useState<R>();
  const [status, setStatus] = useState<apiStutus>(API_STATUS.IDLE);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(
    ({ fetchFn }: fetchProps) => {
      if (!fetchFn) return;
      setStatus(API_STATUS.LOADING);

      const resolvePromise = async (res: Response) => {
        if (mockTest) {
          setStatus(API_STATUS.SUCCESS);
          return;
        }
        const data = await res.json();

        if (data.message === SERVER_MESSAGE.USER_TOKEN_EXPIRED) {
          throw new ApiError(data.message, res.status);
        }

        setData(data);
        setStatus(API_STATUS.SUCCESS);
      };

      const handleError = (error: Error) => {
        setStatus(API_STATUS.ERROR);
        setError(error);
      };

      setPromise(fetchFn().then(resolvePromise).catch(handleError));
    },
    [fetchFn],
  );

  useEffect(() => {
    fetch({ fetchFn });
  }, [fetchFn]);

  if (suspense && status === API_STATUS.LOADING && promise) {
    throw promise;
  }
  if (status === API_STATUS.ERROR) {
    throw error;
  }

  return { data, status, fetch };
};

export default useFetch;
