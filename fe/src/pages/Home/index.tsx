import Button from '@Components/common/Button';
import { NavigationBar } from '@Components/common/NavBar';
import NotFound from '@Components/common/NotFound';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { END_POINT } from '@Constants/endpoint';

import useFetch from '@Hooks/useFetch';

import {
  LocationData,
  Product,
  ProductResponseData,
  UserContextProps,
  UserLocationResponseData,
} from '@Types/index';

import * as S from './style';
import { UserContext } from '../../App';

const Home = () => {
  const navigate = useNavigate();
  const { user, setUserInfo } = useContext(UserContext) as UserContextProps;

  const [userLocations, setUserLocations] = useState<LocationData[]>([]);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [targetTownIndex, setTargetTownIndex] = useState(0);

  const { data, status, errorMessage, fetchData } = useFetch<
    UserLocationResponseData | ProductResponseData
  >(`${END_POINT.userLocation}`);

  const towns = user.towns.map(({ town }) => town);

  const getProduct = async (locationId: number) => {
    await fetchData({
      url: `${END_POINT.products}?page=0&size=10&locationId=${locationId}`,
      isGetData: true,
    });
  };

  const handleModalClick = (townIndex: number) => {
    if (towns.length === 1) return;
    if (userLocations) {
      setTargetTownIndex(townIndex);
      setUserLocations([...userLocations]);
      setUserInfo({ towns: [...userLocations] });
    }
  };

  useEffect(() => {
    if (data) {
      if (!userLocations.length) {
        const userLocationsData = data as UserLocationResponseData;
        const towns = Object.entries(userLocationsData.data)
          .map(([, locationInfo]) => locationInfo)
          .filter((locationInfo) => {
            if (locationInfo) return locationInfo.town;
          });

        setUserInfo({ towns: towns });
        setUserLocations(towns);
      }
    }
  }, [data]);

  useEffect(() => {
    if (data && userLocations.length) {
      const productsData = data as ProductResponseData;
      setProducts(productsData.data.products);
    }
  }, [data]);

  useEffect(() => {
    if (userLocations.length) {
      getProduct(userLocations[targetTownIndex].locationId);
    }
  }, [userLocations]);

  return (
    <>
      <NavigationBar
        type="homeLayout"
        title="title1"
        towns={targetTownIndex === 0 ? towns : towns.reverse()}
        modalHanlder={handleModalClick}
      />
      {status === 'error' && <NotFound errorMessage={errorMessage} />}
      {products && <ProductList key={products.length} itemData={products} />}
      <S.ButtonBox>
        <Button
          buttonType="circle"
          buttonState="active"
          size="L"
          iconType="plus"
          onClick={() => navigate('/newproduct')}
        />
      </S.ButtonBox>
      <TabBarHome currentPage="home" />
    </>
  );
};

export default Home;