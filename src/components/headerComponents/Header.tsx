import { useContext, useState, type ChangeEvent } from "react";
import { CartIcon } from "./CartIcon";
import { HeaderNav } from "./HeaderNav";
import { HeaderTitle } from "./HeaderTitlte";
import { HeartIcon } from "./HeartIcon";
import { MyAccountIcon } from "./MyAccountIcon";
import { Link, useNavigate } from "react-router";
import { DataContext } from "../../context/DataContext";
import { allProductsData, type ProductsData } from "../../productsData";
import { SeacrhProductsList } from "./SearchProductsList";

export const Header = () => {
  const [searchedProducts, setSearchedProducts] = useState<ProductsData[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const navigator = useNavigate();
  const { setActiveLink, isLogin } = useContext(DataContext);

  const handleLoginNavigator = () => {
    navigator("/login");
    setActiveLink("");
  };

  const handleLookingForProducts = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInputValue = e.target.value.toLocaleLowerCase();
    setSearchValue(searchInputValue);
    if (searchInputValue === "") {
      setSearchedProducts([]);
      return;
    }

    const searchedProducts = allProductsData.filter((p) =>
      p.productName.toLocaleLowerCase().includes(searchInputValue)
    );
    setSearchedProducts(searchedProducts);
  };

  return (
    <header className="relative flex items-center justify-between mt-10">
      <HeaderTitle />
      <HeaderNav />
      <div className="flex gap-5">
        <div className="relative">
          <input
            className="py-2.5 px-5 w-[243px] bg-[#F5F5F5] border-none outline-none text-[12px] rounded-[4px]"
            type="text"
            name="search"
            placeholder="What are you looking for?"
            onChange={handleLookingForProducts}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          />
          <div className="absolute right-5 top-[50%] translate-y-[-50%] ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <Link to="/favorite-list">
          <HeartIcon />
        </Link>

        <CartIcon />
        {isLogin ? (
          <MyAccountIcon />
        ) : (
          <a
            onClick={handleLoginNavigator}
            className="font-medium text-[#FAFAFA] bg-[#DB4444] rounded-[4px] py-1.5 px-4 text-center block cursor-pointer hover:bg-[#db4444a1] transition duration-300  hover:scale-105"
          >
            Login
          </a>
        )}
      </div>
      {isFocused && searchValue && (
        <div className="w-[422px] h-[300px] overflow-hidden overflow-y-auto absolute bg-white right-15 top-12 py-5 rounded-[4px] z-10 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]">
          {searchedProducts.length === 0 ? (
            <p className="text-red-600 text-center">Product not found</p>
          ) : (
            <ul className="flex flex-col gap-2 justify-center">
              {searchedProducts.map((p) => (
                <div className="relative group" key={p.id}>
                  <li className="border-b last:border-b-0 border-[#0000003b] px-5 pb-5 last:pb-0 cursor-pointer">
                    <SeacrhProductsList
                      category={p.category}
                      originalProductPrice={p.originalProductPrice}
                      discountedProductPrice={p.discountedProductPrice}
                      productImage={p.productImage}
                      productName={p.productName}
                    />
                  </li>
                  <div className="w-full h-full absolute top-0 left-0 z-[-1] transition-colors duration-300 group-hover:bg-[#ededed]"></div>
                </div>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
};
