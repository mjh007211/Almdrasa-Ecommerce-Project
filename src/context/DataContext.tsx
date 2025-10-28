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
  setActiveLink: (link: string) => void;
  setUserData: (data: UserData[]) => void;
  setIsLogin: (input: boolean) => void;
  setIsAllowToSignin: (input: boolean) => void;
  setDisplayProduct: (product: {
    category: string;
    productImage: string;
    productName: string;
    originalProductPrice: number;
    discountedProductPrice: number;
  }) => void;
  setDisplayRelatedProduct: (products: UserData[]) => void;
  setCartBadge: (counter: number) => number;
  setHeartBadge: (counter: number) => number;
  setUserFavoriteList: (products: ProductsData[]) => void;
  setUserCartList: (products: ProductsData[]) => void;
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
  cartBadge: null,
  heartBadge: null,
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
});
