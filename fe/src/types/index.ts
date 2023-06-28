export type tabBarList = 'home' | 'sales' | 'heart' | 'chat' | 'account';
export type Product = {
  productId: number;
  title: string;
  price: number;
  createdAt: string;
  status: string;
  location: {
    locationId: number;
    district: string;
    city: string;
    town: string;
  };
  watchlistCounts: number;
  chatroomCounts: number;
  mainImage: {
    productImageId: number;
    imageUrl: string;
  };
};

export type CategoryType = {
  categoryId: number;
  categoryName: string;
};

export type ProductResponseData = {
  statusCode: number;
  message: string;
  data: {
    products: Product[];
  };
};

export type Chat = {
  chatId: number;
  profileImage: string;
  timeStamp: number;
  user: string;
  description: string;
  productImage: string;
};

export type ChatResponseData = {
  statusCode: number;
  message: string;
  data: {
    chats: Chat[];
  };
};

export type LocationData = {
  locationId: number;
  district: string;
  city: string;
  town: string;
};

export type User = {
  userId: number;
  avatar: string;
  username: string;
  towns: LocationData[];
};

export type UserContextProps = {
  user: User;
  setUserInfo: (updatedUserInfo: Partial<User>) => void;
};

export type CategoryResponseData = {
  statusCode: number;
  message: string;
  data: {
    category: CategoryType[];
  };
};

export type ImgFileType = {
  ImgFileId: number;
  ImgFileName: string;
};

export type UserLocation = {
  primaryLocation: LocationData;
  secondaryLocation?: LocationData;
};

export type UserLocationResponseData = {
  statusCode: number;
  message: string;
  data: UserLocation;
};
