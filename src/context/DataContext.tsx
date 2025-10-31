import { createContext } from "react";
import type { UserData } from "../App";
import type { ProductsData } from "../productsData";

type AuthenticationContextType = {
  activeLink: string;
  userData: UserData[];
  isLogin: boolean | null;
  isAllowToSignin: boolean | null;
  displayProduct: ProductsData;
  displayRelatedProduct: ProductsData[];
  cartBadge: number | undefined;
  heartBadge: number | undefined;
  userFavoriteList: ProductsData[];
  userCartList: ProductsData[] | undefined;
  userSubTotal: number | undefined;
  setActiveLink: (link: string) => void;
  setUserData: (data: UserData[]) => void;
  setIsLogin: (input: boolean) => void;
  setIsAllowToSignin: (input: boolean) => void;
  setDisplayProduct: (product: ProductsData) => void;
  setDisplayRelatedProduct: (products: ProductsData[]) => void;
  setCartBadge: (counter: number) => void;
  setHeartBadge: (counter: number) => void;
  setUserFavoriteList: (products: ProductsData[]) => void;
  setUserCartList: (products: ProductsData[]) => void;
  setUserSubTotal: (total: number) => void;
};

export const DataContext = createContext<AuthenticationContextType>({
  activeLink: "",
  userData: [],
  isLogin: null,
  isAllowToSignin: null,
  displayProduct: {
    category: "",
    productImage: "",
    productName: "",
    originalProductPrice: 0,
    discountedProductPrice: 0,
  },
  displayRelatedProduct: [],
  cartBadge: 0,
  heartBadge: 0,
  userFavoriteList: [],
  userSubTotal: 0,
  userCartList: [],
  setActiveLink: () => {},
  setUserData: () => {},
  setIsLogin: () => {},
  setIsAllowToSignin: () => {},
  setDisplayProduct: () => {},
  setDisplayRelatedProduct: () => {},
  setCartBadge: () => 0,
  setHeartBadge: () => 0,
  setUserFavoriteList: () => {},
  setUserCartList: () => {},
  setUserSubTotal: () => {},
});
