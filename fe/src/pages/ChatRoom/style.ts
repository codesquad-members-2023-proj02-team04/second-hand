import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: fixed;
  gap: 20px;
  top: 8vh;
  height: 8vh;
  width: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.color.palette.gray500};
  padding: 10px 0px 10px 20px;
  background: ${({ theme }) => theme.color.palette.white};
  z-index: 1;
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-flow: 1;
  height: 6vh;
`;

export const ProductImg = styled.img`
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  border-radius: 8px;
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

export const TopBox = styled.div`
  height: 19vh;
  background: ${({ theme }) => theme.color.palette.white};
`;

export const BottomBox = styled.div`
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.white};
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  height: auto;
  padding: 5px 10px;
`;
