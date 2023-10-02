import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { Icon } from '../../Icon';

interface NavBarHomeProps {
  towns?: string[];
  modalHanlder?: (key: number) => void;
}

export const NavBarHome = ({ towns, modalHanlder }: NavBarHomeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const DropDownRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (
        DropDownRef.current &&
        !DropDownRef.current.contains(target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropDownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <S.Layout>
      <S.AddressBox
        ref={DropDownRef}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {towns && <span>{towns[0]}</span>}
        <Icon iconType="chevronDown" fill="black" />
      </S.AddressBox>
      {isOpen && (
        <S.DropDown onClick={handleDropDownClick}>
          {towns &&
            modalHanlder &&
            towns.map((town, index) => (
              <S.Town
                key={town}
                onClick={() => {
                  setIsOpen(false);
                  if (index === 0) return;
                  modalHanlder(index);
                }}
              >
                {town}
              </S.Town>
            ))}
          <S.TownSetting onClick={() => navigate('/locationSetting')}>
            내 동네 설정하기
          </S.TownSetting>
        </S.DropDown>
      )}
    </S.Layout>
  );
};
