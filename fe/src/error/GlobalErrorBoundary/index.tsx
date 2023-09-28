import NotFound from '@Components/common/NotFound';
import Redirect from '@Components/common/Redirect';
import { ApiError } from '@Error/ApiError';
import { LocalError } from '@Error/LocalError';
import React, { ReactNode } from 'react';
import { ERROR_MESSAGE } from '@Constants/index';
import { SERVER_MESSAGE } from '@Constants/server';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error;
}

export class GlobalErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: new Error(),
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render(): ReactNode {
    const { hasError, error } = this.state;
    if (!hasError) return this.props.children;

    if (error instanceof LocalError) {
      if (error.message === ERROR_MESSAGE.refresh) {
        return <Redirect errorMessage={error.message} />;
      }
    }

    if (error instanceof ApiError) {
      if (error.message === SERVER_MESSAGE.USER_TOKEN_EXPIRED) {
        return <Redirect errorMessage={error.message} />;
      }
    }
    return <NotFound errorMessage={ERROR_MESSAGE.default} />;
  }
}
