import LocationButtonList from '@Components/LocationSetting/LocationButtonList';
import LocationNotice from '@Components/LocationSetting/LocationNotice';
import MessageAlert from '@Components/LocationSetting/MessageAlert';
import Layout from '@Components/common/Layout';
import { NavBarModal } from '@Components/common/NavBar/NavBarModal';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { LocalError } from '@Error/LocalError';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE } from '@Constants/index';
import { LEAST_LOCATION } from '@Constants/location';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

const LocationSetting = () => {
  const navigate = useNavigate();
  const { userTownList, deleteUserLocation } = useUserLocationContext();
  const [isShowNotice, setIsShowNotice] = useState(false);

  if (!userTownList.length) {
    throw new LocalError(ERROR_MESSAGE.refresh);
  }

  const handleBackBtnClick = () => {
    navigate(ROUTE_PATH.HOME);
  };

  const updateUserLocation = (index: number) => {
    if (userTownList.length === LEAST_LOCATION) {
      setIsShowNotice(true);
      return;
    }
    deleteUserLocation(index);
  };

  useEffect(() => {
    if (isShowNotice) setTimeout(() => setIsShowNotice(false), 1000);
  }, [isShowNotice]);

  return (
    <Layout>
      <NavBarModal
        prev="닫기"
        center="동네 설정"
        handlePrev={handleBackBtnClick}
      />
      <S.Layout>
        <LocationNotice />
        <LocationButtonList handleIcon={updateUserLocation} />
        {isShowNotice && <MessageAlert />}
      </S.Layout>
    </Layout>
  );
};

export default LocationSetting;
