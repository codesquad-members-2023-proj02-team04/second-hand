import { END_POINT } from '@Constants/endpoint';
import { persistentStorage } from '../App';

export const getFavoritesCategory = async () =>
  await fetch(`${END_POINT.watchlistCategory}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });

export const getCurrentCategoryProducts = async (categoryId?: number) => {
  const api = categoryId
    ? `${END_POINT.watchlist}?categoryId=${categoryId}`
    : `${END_POINT.watchlist}`;

  return await fetch(api, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });
};

export const updateProductFavorite = async (
  productId: number,
  method: string,
) =>
  await fetch(`${END_POINT.products}/${productId}/watchlist`, {
    method,
    headers: {
      Authorization: 'Bearer ' + persistentStorage.get(),
      'Content-Type': 'application/json',
    },
  });
