import { postNewProduct } from '@Apis/product';
import { NewImg } from '@Components/NewProduct/NewImg';
import { NewTitle } from '@Components/NewProduct/NewTitle';
import Layout from '@Components/common/Layout';
import { NavBarModal } from '@Components/common/NavBar/NavBarModal';
import { TabBarSellProduct } from '@Components/common/TabBar';
import { useUserLocationContext } from '@Contexts/userLocationContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '@Hooks/useFetch';
import { SaleResponseData } from '@Types/index';
import * as S from './style';

export const NewProduct = () => {
  const { userLocationList } = useUserLocationContext();
  const [price, setPrice] = useState<string>('0');
  const [title, setTitle] = useState<string>('');
  const [contentes, setContents] = useState<string>('');
  const [productImages, setProductImages] = useState<File[]>([]);
  const [categoryId, setCategoryId] = useState<number>(0);

  const formData = new FormData();

  const { fetch } = useFetch<SaleResponseData>({
    suspense: false,
  });

  const handelSavePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    sessionStorage.setItem('savePrice', JSON.stringify(value));
  };

  const handelDetailText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    sessionStorage.setItem('saveDetailText', JSON.stringify(value));
  };
  const handlePost = async () => {
    formData.append('title', title);
    formData.append('price', Number(price).toString());
    formData.append('contents', contentes);
    productImages?.forEach((product) =>
      formData.append('productImages', product),
    );
    formData.append('categoryId', categoryId.toString());
    formData.append('locationId', userLocationList[0].locationId.toString());

    await fetch({
      fetchFn: () => postNewProduct(formData),
    });
  };

  const getPriceData = () => {
    const priceData = sessionStorage.getItem('savePrice');
    if (priceData) {
      setPrice(JSON.parse(priceData));
    }
  };

  const getDetailTextData = () => {
    const detailText = sessionStorage.getItem('saveDetailText');
    if (detailText) {
      setContents(JSON.parse(detailText));
    }
  };

  const getTitleData = () => {
    const saveCategoryData = sessionStorage.getItem('saveTitle');
    if (saveCategoryData) {
      setTitle(JSON.parse(saveCategoryData));
    }
  };

  const getCategoryId = () => {
    const saveCategoryData = sessionStorage.getItem('saveCategory');
    if (saveCategoryData) {
      setCategoryId(JSON.parse(saveCategoryData).categoryId);
    }
  };

  const navigation = useNavigate();

  useEffect(() => {
    getPriceData();
    getDetailTextData();
    getTitleData();
    getCategoryId();
  });

  return (
    <Layout>
      <S.Layout>
        <NavBarModal
          prev="닫기"
          center="내 물건 팔기"
          next="완료"
          handlePrev={() => navigation(-1)}
          handleNext={async () => {
            await handlePost();
            navigation('/home');
          }}
        />
        <S.ContentBox>
          <S.SaveImgBox>
            <NewImg
              originFile={setProductImages}
              originFileValue={productImages}
            />
          </S.SaveImgBox>
          <hr />
          <NewTitle titleProps={setTitle} titleValueProps={title} />
          <hr />
          <S.PriceBox>
            <label htmlFor="priceBox">￦</label>
            <input
              type="number"
              placeholder="가격(선택 사항)"
              id="priceBox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPrice(e.target.value);
                handelSavePrice(e);
              }}
              value={price}
            />
          </S.PriceBox>
          <hr />
          <S.DetailBox>
            <textarea
              placeholder="역삼 1동에 올릴 게시물 내용을 작성해주세요.(판매금지 물품은 게시가 제한될 수 있어요.)"
              value={contentes}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setContents(e.target.value);
                handelDetailText(e);
              }}
            />
          </S.DetailBox>
        </S.ContentBox>
        <TabBarSellProduct currentLocation="역삼1동" />
      </S.Layout>
    </Layout>
  );
};
