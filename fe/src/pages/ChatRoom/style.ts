import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  width: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.color.palette.gray500};
  background: ${({ theme }) => theme.color.palette.white};
  padding: 10px 0;
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6vh;
`;

export const ProductImg = styled.img`
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  border-radius: 8px;
  padding-left: 5px;
`;

export const ProductName = styled.span`
  font-size: 15px;
  font-weight: 450;
  line-height: 20px;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 550;
  line-height: 15px;
`;

export const ChatBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  height: 598px !important;
  padding: 5px 10px;
`;
