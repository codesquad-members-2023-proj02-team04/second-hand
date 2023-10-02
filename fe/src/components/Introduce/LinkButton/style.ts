import styled from 'styled-components';

export const LinkButton = styled.button`
  width: 140px;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.colors.neutralTextPrimary};
  background-color: ${({ theme }) => theme.color.colors.neutralBackgroundWeak};
  border-radius: 50px;
  padding: 5px 10px;

  &:hover {
    background-color: ${({ theme }) =>
      theme.color.colors.neutralBackgroundBlur};
  }
`;

export const InnerText = styled.span`
  width: 100px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.colors.neutralTextPrimary};
  text-align: start;
`;
