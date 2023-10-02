import { Icon } from '@Components/common/Icon';
import { useNavigate } from 'react-router-dom';
import { TAB_LIST } from '@Constants/index';
import { ROUTE_PATH } from '@Constants/route';
import { palette } from '@Styles/color';
import { tabBarList } from '@Types/index';
import * as S from './style';
import { persistentStorage } from '../../../App';

const PageGuide = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname.slice(1);

  const handleTabItemClick = (tabId: tabBarList) => {
    if (tabId === currentPath) return;

    const targetPage = `/${tabId}`;
    navigate(targetPage);
  };

  const logoutHandler = () => {
    persistentStorage.delete();
    navigate(ROUTE_PATH.ROOT);
  };

  return (
    <S.Box>
      <S.Row>
        {Object.entries(TAB_LIST)
          .slice(0, 3)
          .map(([tabId, tabName]) => (
            <S.Item
              key={tabId}
              onClick={() => handleTabItemClick(tabId as tabBarList)}
            >
              <Icon
                iconType={tabId as tabBarList}
                width={25}
                height={25}
                fill={tabId === currentPath ? palette.orange : palette.black}
              />
              <S.ItemName isSelected={tabId === currentPath}>
                {tabName}
              </S.ItemName>
            </S.Item>
          ))}
      </S.Row>
      <S.Row>
        {Object.entries(TAB_LIST)
          .slice(3, 5)
          .map(([tabId, tabName]) => (
            <S.Item
              key={tabId}
              onClick={() => handleTabItemClick(tabId as tabBarList)}
            >
              <Icon
                iconType={tabId as tabBarList}
                width={25}
                height={25}
                fill={tabId === currentPath ? palette.orange : palette.black}
              />
              <S.ItemName isSelected={tabId === currentPath}>
                {tabName}
              </S.ItemName>
            </S.Item>
          ))}
        <S.Item onClick={logoutHandler}>
          <Icon
            iconType="githubLogo"
            width={25}
            height={25}
            fill={palette.black}
          />
          <S.ItemName>로그아웃</S.ItemName>
        </S.Item>
      </S.Row>
    </S.Box>
  );
};

export default PageGuide;
