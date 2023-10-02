import { getProducts } from '@Apis/product';
import { createContext, useContext, useMemo } from 'react';
import useFetch from '@Hooks/useFetch';
import { IGetHomeProducts } from '@Types/homeProducts';
import { Product, ProductResponseData } from '@Types/index';

interface HomeProductsContextProps {
  homeProductList: Product[];
  getHomeProducts: ({ page, size, locationId }: IGetHomeProducts) => void;
}

interface HomeProductsProviderProps {
  children: React.ReactNode;
}

export const homeProductsContext =
  createContext<HomeProductsContextProps | null>(null);

export const HomeProductsProvider = ({
  children,
}: HomeProductsProviderProps) => {
  const { data: homeProductData, fetch } = useFetch<ProductResponseData>({
    suspense: true,
  });

  const homeProductList = useMemo(
    () => (homeProductData ? homeProductData?.data.products : []),
    [homeProductData],
  );

  const getHomeProducts = ({
    page = 0,
    size = 10,
    locationId,
  }: IGetHomeProducts) => {
    fetch({
      fetchFn: () =>
        getProducts({
          page,
          size,
          locationId,
        }),
    });
  };

  return (
    <homeProductsContext.Provider
      value={{
        homeProductList,
        getHomeProducts,
      }}
    >
      {children}
    </homeProductsContext.Provider>
  );
};

export const useHomeProductsContext = () => {
  const context = useContext(homeProductsContext);

  if (!context) {
    throw new Error(
      'useHomeProductsContext should be used within homeProductsContextProvider',
    );
  }

  return context;
};
