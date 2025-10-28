import { useContext, useEffect, useState } from "react";
import type { UserData } from "../App";
import { FavoriteProductCard } from "../components/favoriteComponents/FavoriteProductCard";
import { SecondaryButtonComponent } from "../components/genericComponents/SecondaryButtonComponent";
import { SecondarySectionTitle } from "../components/genericComponents/SecondarySectionTitle";
import { allProductsData, type ProductsData } from "../productsData";
import { ButtonComponent } from "../components/genericComponents/ButtonComponent";
import { useNavigate } from "react-router";
import { ProductCard } from "../components/genericComponents/ProductCard";
import { DataContext } from "../context/DataContext";

export const FavoriteProductsList = () => {
  const [userFavoriteList, setUserFavoriteList] = useState<ProductsData[]>([]);
  const [isError, setIsError] = useState(false);
  const [justForYouData, setJustForYouData] = useState<ProductsData[]>([]);
  const navigator = useNavigate();
  const { setActiveLink } = useContext(DataContext);

  useEffect(() => {
    const getStoredUsers: UserData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const findUser = getStoredUsers.find((u) => u.isLogin === true);

    if (!findUser) {
      setIsError(true);
      return;
    }

    setUserFavoriteList(findUser.favoriteProducts);
  }, []);

  const handleNavigate = () => {
    navigator("/sign-up");
    setActiveLink("Sign Up");
  };

  useEffect(() => {
    const shuffled = [...allProductsData].sort(() => 0.5 - Math.random());
    setJustForYouData(shuffled.slice(0, 4));
  }, []);

  return (
    <section className="mt-[60px] mb-28">
      <div className="flex gap-3 text-[14px]">
        <span className="text-[#0000003b]">Home</span> <span>/</span>
        Favorite list
      </div>
      {isError ? (
        <div className="flex flex-col gap-2.5 mt-5">
          <p>Sign up/Log in to see/add your favorite products.</p>
          <a onClick={handleNavigate}>
            <ButtonComponent text="Sign up/Log in" width={159} />
          </a>
        </div>
      ) : userFavoriteList?.length ? (
        <div>
          <div className="flex items-center justify-between">
            <h3>Wishlist ({userFavoriteList?.length})</h3>
            <SecondaryButtonComponent text="Move All To Bag" width={223} />
          </div>
          <div>
            <ul className="grid grid-cols-[repeat(4,minmax(270px,1fr))] gap-8 mt-12">
              {userFavoriteList?.map((p) => (
                <li key={p.id}>
                  <FavoriteProductCard
                    id={p.id}
                    discount={p.discount}
                    productImage={p.productImage}
                    productName={p.productName}
                    originalProductPrice={p.originalProductPrice}
                    discountedProductPrice={p.discountedProductPrice}
                    rating={p.rating}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="mt-5">Favorite product list is empty</p>
      )}
      {!isError && (
        <div>
          <div className="flex items-center justify-between mt-14">
            <SecondarySectionTitle secondaryTitle="Just For You" />
            <SecondaryButtonComponent text="See All" width={150} />
          </div>
          <div>
            <ul className="flex gap-8 mt-12">
              {justForYouData.map((p) => (
                <li key={p.id}>
                  <ProductCard
                    id={p.id}
                    discount={p.discount}
                    category={p.category}
                    productImage={p.productImage}
                    productName={p.productName}
                    originalProductPrice={p.originalProductPrice}
                    discountedProductPrice={p.discountedProductPrice}
                    rating={p.rating}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
