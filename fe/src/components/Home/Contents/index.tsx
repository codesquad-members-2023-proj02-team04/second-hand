import { LoadingField } from '@Components/common/LoadingField';
import { ProductList } from '@Components/common/ProductList';
import { useHomeProductsContext } from '@Contexts/homeProductContext';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { useEffect } from 'react';
import usePullToRefresh from '@Hooks/usePullToRefresh';

const Contents = () => {
  const { userLocationList } = useUserLocationContext();
  const { homeProductList, getHomeProducts } = useHomeProductsContext();
  const { isRefreshing, loadingIndicatorRef } = usePullToRefresh({
    apiCallback: () => {
      getHomeProducts({
        locationId: userLocationList[0].locationId,
      });
    },
  });

  useEffect(() => {
    getHomeProducts({
      locationId: userLocationList[0].locationId,
    });
  }, [userLocationList]);

  return (
    <>
      {isRefreshing && (
        <LoadingField isDynamic={true} ref={loadingIndicatorRef} />
      )}
      <ProductList list={homeProductList} />
    </>
  );
};

export default Contents;
