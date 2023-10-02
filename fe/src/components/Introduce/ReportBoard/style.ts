import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: flex-start;
  width: 300px;
  height: 330px;
  background-color: ${({ theme }) => theme.color.palette.white};
  border-radius: 20px;
  padding: 20px;
  gap: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const SuccesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.palette.gray900};

  strong {
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.colors.accentBackgroundPrimary};
  }
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const InnerText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.palette.gray900};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 30px 30px 1fr;
  width: 100%;
  height: 100%;
  gap: 10px;
  margin-top: 10px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.palette.black};
  }

  input {
    width: 40%;
    height: 50%;
    border: none;
    box-shadow: inset 0 -2px ${({ theme }) => theme.color.palette.orange};

    padding: 5px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.palette.gray900};

    &:focus {
      outline: none;
    }
  }

  textarea {
    width: 94%;
    height: 90%;
    border: 2px solid ${({ theme }) => theme.color.palette.orange};
    border-radius: 10px;

    padding: 5px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.palette.gray900};

    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      height: 5%;
      background: ${({ theme }) => theme.color.colors.accentBackgroundPrimary};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 149, 0, 0.1);
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 10px;

  span {
    font-size: 9px;
    font-weight: 500;
  }

  button {
    font-size: 12px;
    font-weight: 500;
    width: 60px;
    height: 30px;
    border: none;
    background-color: ${({ theme }) => theme.color.palette.orange};
    border-radius: 10px;
    color: ${({ theme }) => theme.color.palette.white};
    cursor: pointer;
  }
`;
