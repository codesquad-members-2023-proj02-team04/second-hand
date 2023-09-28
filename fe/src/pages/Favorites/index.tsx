import { getCurrentCategoryProducts } from '@Apis/favorites';
import CategoryList from '@Components/Favorites/CategoryList';
import Layout from '@Components/common/Layout';
import { NavBarDefault } from '@Components/common/NavBar/NabBarDefault';
import { ProductList } from '@Components/common/ProductList';
import { TabBarHome } from '@Components/common/TabBar';
import useFetch from '@Hooks/useFetch';
import { ProductResponseData } from '@Types/index';
import * as S from './style';

const Favorites = () => {
  const { data: productListData, fetch } = useFetch<ProductResponseData>({
    fetchFn: getCurrentCategoryProducts,
  });

  const getProductsBy = (categoryId: number) => {
    fetch({ fetchFn: () => getCurrentCategoryProducts(categoryId) });
  };

  return (
    <Layout>
      <NavBarDefault title="관심 목록" />
      <CategoryList handleCategory={getProductsBy} />
      <S.TopBox />
      {productListData && <ProductList list={productListData.data.products} />}
      <S.BottomBox />
      <TabBarHome currentPage="heart" />
    </Layout>
  );
};

export default Favorites;
