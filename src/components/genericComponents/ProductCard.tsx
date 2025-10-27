import { useEffect, useState } from "react";
import { allProductsData, type ProductsData } from "../../productsData";
import { HeartIcon } from "../headerComponents/HeartIcon";
import type { UserData } from "../../App";
import { EyeIcon } from "./EyeIcon";
import { useLocation, useNavigate } from "react-router";

export const ProductCard = ({
  id,
  category,
  productImage,
  productName,
  discount,
  originalProductPrice,
  discountedProductPrice,
  rating,
  setDisplayProduct,
  setDisplayRelatedProduct,
  setCartBadge,
  setHeartBadge,
}: ProductsData) => {
  const [isError, setIsError] = useState<
    "sameProduct" | "userNotFound" | "success" | null
  >(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isError) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsError(null);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isError]);

  const navigator = useNavigate();
  const location = useLocation();

  const handleAddFavoriteProduct = () => {
    const getStoredUsers: UserData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const findUser = getStoredUsers.find((u) => u.isLogin === true);

    if (!findUser) {
      setIsError("userNotFound");
      return;
    }

    const isProductAdded = findUser.favoriteProducts.some((p) => p.id === id);

    if (isProductAdded) {
      setIsError("sameProduct");
      return;
    }

    const product: ProductsData = {
      id,
      productImage,
      productName,
      discount,
      originalProductPrice,
      discountedProductPrice,
      rating,
    };

    const updateUserFavoriteList: ProductsData[] = [
      ...findUser.favoriteProducts,
      product,
    ];

    const updateUsers: UserData[] = getStoredUsers.map((u) =>
      u.isLogin === true
        ? { ...u, favoriteProducts: updateUserFavoriteList }
        : u
    );

    setHeartBadge((prev: number) => prev + 1);

    localStorage.setItem("users", JSON.stringify(updateUsers));
    setIsError("success");
  };

  const handleAddProductCart = () => {
    const getStoredUsers: UserData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const findUser = getStoredUsers.find((u) => u.isLogin === true);

    if (!findUser) {
      setIsError("userNotFound");
      return;
    }

    const isProductAdded = findUser.cart.some((p) => p.id === id);

    if (isProductAdded) {
      setIsError("sameProduct");
      return;
    }

    const product: ProductsData = {
      id,
      productImage,
      productName,
      originalProductPrice,
      discountedProductPrice,
    };

    const updateUserCart: ProductsData[] = [...findUser.cart, product];

    const updateUsers: UserData[] = getStoredUsers.map((u) =>
      u.isLogin === true ? { ...u, cart: updateUserCart } : u
    );

    setCartBadge((prev: number) => prev + 1);

    localStorage.setItem("users", JSON.stringify(updateUsers));
    setIsError("success");
  };

  const handleDisplayProduct = () => {
    const product: ProductsData = {
      category,
      productImage,
      productName,
      originalProductPrice,
      discountedProductPrice,
    };

    const getRelatedProduct = allProductsData.filter(
      (p) =>
        p.category === product.category && p.productName !== product.productName
    );

    setDisplayRelatedProduct(getRelatedProduct);
    setDisplayProduct(product);
    navigator("/product");
  };

  const styleEyeIcon = "right-4 top-4";

  return (
    <div className="relative">
      <p
        className={`absolute z-10 top-0 right-0 text-[13px] transition-opacity duration-500 text-red-600 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {isError === "sameProduct" ? "Product already has been added." : ""}
        {isError === "userNotFound" ? "Sign in/Log in to add products." : ""}
        {isError === "success" ? (
          <span className="text-green-500">Added successfully.</span>
        ) : (
          ""
        )}
      </p>
      <div className="relative group flex flex-col justify-center items-center bg-[#f5f5f5] rounded-[4px] w-[270px] h-[250px]">
        {(productName === "Kids Electric Car" ||
          productName === "GP11 Shooter USB Gamepad") && (
          <div className="bg-[#00FF66] absolute left-4 top-4 rounded-[4px] px-2.5 py-1">
            <span className="text-[#FAFAFA] text-center">New</span>
          </div>
        )}
        {discount && (
          <div className="bg-[#DB4444] absolute left-4 top-4 rounded-[4px] px-2.5 py-1">
            <span className="text-[#FAFAFA]">- {discount}%</span>
          </div>
        )}

        {location.pathname !== "/favorite-list" && (
          <button onClick={handleAddFavoriteProduct}>
            <div className="flex justify-center items-center w-[44px] h-[44px] rounded-full bg-white absolute right-4 top-4">
              <HeartIcon />
            </div>
          </button>
        )}

        <a onClick={handleDisplayProduct}>
          <div
            className={`flex justify-center items-center w-[44px] h-[44px] rounded-full bg-white absolute  cursor-pointer transition-transform duration-300 hover:scale-110 ${
              location.pathname === "/favorite-list"
                ? styleEyeIcon
                : "right-4 top-18"
            }`}
          >
            <EyeIcon />
          </div>
        </a>
        <img className="w-[162px] h-[142px]" src={productImage} alt="" />
        <div className="flex absolute bottom-0 left-0 justify-center bg-black w-[100%] opacity-0 group-hover:opacity-100 transition duration-300 rounded-b-[4px] py-2">
          <button
            onClick={handleAddProductCart}
            className="font-medium text-[#ffffff] cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 font-medium mt-2.5">
        <h4>{productName}</h4>
        <div className="flex gap-2.5">
          <span className="text-[#DB4444]">
            ${discountedProductPrice ?? originalProductPrice}
          </span>
          {discountedProductPrice ? (
            <span className="text-[#0000003b] line-through">
              ${originalProductPrice}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <svg
          width="100"
          height="20"
          viewBox="0 0 100 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.673 10.1717C17.7437 9.36184 17.1709 7.65517 15.8284 7.65517H13.3992C12.7853 7.65517 12.243 7.25521 12.0617 6.66868L11.3375 4.32637C10.9309 3.01106 9.0691 3.01106 8.66246 4.32637L7.93832 6.66868C7.75699 7.25521 7.21469 7.65517 6.60078 7.65517H4.12961C2.79142 7.65517 2.21592 9.35274 3.27822 10.1665L5.39469 11.7879C5.85885 12.1435 6.05314 12.7501 5.88196 13.3092L5.11296 15.8207C4.71416 17.1232 6.22167 18.1704 7.30301 17.342L9.14861 15.9281C9.65097 15.5432 10.349 15.5432 10.8514 15.9281L12.6807 17.3295C13.7636 18.159 15.2725 17.1079 14.8696 15.8046L14.09 13.2827C13.9159 12.7198 14.113 12.1081 14.5829 11.7526L16.673 10.1717Z"
            fill="#FFAD33"
          />
          <path
            d="M36.673 10.1717C37.7437 9.36184 37.1709 7.65517 35.8284 7.65517H33.3992C32.7853 7.65517 32.243 7.25521 32.0617 6.66868L31.3375 4.32637C30.9309 3.01106 29.0691 3.01106 28.6625 4.32637L27.9383 6.66868C27.757 7.25521 27.2147 7.65517 26.6008 7.65517H24.1296C22.7914 7.65517 22.2159 9.35274 23.2782 10.1665L25.3947 11.7879C25.8588 12.1435 26.0531 12.7501 25.882 13.3092L25.113 15.8207C24.7142 17.1232 26.2217 18.1704 27.303 17.342L29.1486 15.9281C29.651 15.5432 30.349 15.5432 30.8514 15.9281L32.6807 17.3295C33.7636 18.159 35.2725 17.1079 34.8696 15.8046L34.09 13.2827C33.9159 12.7198 34.113 12.1081 34.5829 11.7526L36.673 10.1717Z"
            fill="#FFAD33"
          />
          <path
            d="M56.673 10.1717C57.7437 9.36184 57.1709 7.65517 55.8284 7.65517H53.3992C52.7853 7.65517 52.243 7.25521 52.0617 6.66868L51.3375 4.32637C50.9309 3.01106 49.0691 3.01106 48.6625 4.32637L47.9383 6.66868C47.757 7.25521 47.2147 7.65517 46.6008 7.65517H44.1296C42.7914 7.65517 42.2159 9.35274 43.2782 10.1665L45.3947 11.7879C45.8588 12.1435 46.0531 12.7501 45.882 13.3092L45.113 15.8207C44.7142 17.1232 46.2217 18.1704 47.303 17.342L49.1486 15.9281C49.651 15.5432 50.349 15.5432 50.8514 15.9281L52.6807 17.3295C53.7636 18.159 55.2725 17.1079 54.8696 15.8046L54.09 13.2827C53.9159 12.7198 54.113 12.1081 54.5829 11.7526L56.673 10.1717Z"
            fill="#FFAD33"
          />
          <path
            d="M76.673 10.1717C77.7437 9.36184 77.1709 7.65517 75.8284 7.65517H73.3992C72.7853 7.65517 72.243 7.25521 72.0617 6.66868L71.3375 4.32637C70.9309 3.01106 69.0691 3.01106 68.6625 4.32637L67.9383 6.66868C67.757 7.25521 67.2147 7.65517 66.6008 7.65517H64.1296C62.7914 7.65517 62.2159 9.35274 63.2782 10.1665L65.3947 11.7879C65.8588 12.1435 66.0531 12.7501 65.882 13.3092L65.113 15.8207C64.7142 17.1232 66.2217 18.1704 67.303 17.342L69.1486 15.9281C69.651 15.5432 70.349 15.5432 70.8514 15.9281L72.6807 17.3295C73.7636 18.159 75.2725 17.1079 74.8696 15.8046L74.09 13.2827C73.9159 12.7198 74.113 12.1081 74.5829 11.7526L76.673 10.1717Z"
            fill="#FFAD33"
          />
          <path
            d="M96.673 10.1717C97.7437 9.36184 97.1709 7.65517 95.8284 7.65517H93.3992C92.7853 7.65517 92.243 7.25521 92.0617 6.66868L91.3375 4.32637C90.9309 3.01106 89.0691 3.01106 88.6625 4.32637L87.9383 6.66868C87.757 7.25521 87.2147 7.65517 86.6008 7.65517H84.1296C82.7914 7.65517 82.2159 9.35274 83.2782 10.1665L85.3947 11.7879C85.8588 12.1435 86.0531 12.7501 85.882 13.3092L85.113 15.8207C84.7142 17.1232 86.2217 18.1704 87.303 17.342L89.1486 15.9281C89.651 15.5432 90.349 15.5432 90.8514 15.9281L92.6807 17.3295C93.7636 18.159 95.2725 17.1079 94.8696 15.8046L94.09 13.2827C93.9159 12.7198 94.113 12.1081 94.5829 11.7526L96.673 10.1717Z"
            fill="#FFAD33"
          />
        </svg>
        <span className="text-[#0000003b] text-[14px] font-semibold">
          ({rating})
        </span>
      </div>
    </div>
  );
};
