import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { UserData } from "../App";
import { FavoriteProductCard } from "../components/favoriteComponents/FavoriteProductCard";
import { SecondaryButtonComponent } from "../components/genericComponents/SecondaryButtonComponent";
import { SecondarySectionTitle } from "../components/genericComponents/SecondarySectionTitle";
import {
  allProductsData,
  justForYouData,
  type ProductsData,
} from "../productsData";
import { ButtonComponent } from "../components/genericComponents/ButtonComponent";
import { useNavigate } from "react-router";
import { ProductCard } from "../components/genericComponents/ProductCard";

type Props = {
  setActiveLink: Dispatch<SetStateAction<string>>;
  setDisplayProduct: Dispatch<SetStateAction<ProductsData>>;
  setDisplayRelatedProduct: Dispatch<SetStateAction<ProductsData[]>>;
};

export const FavoriteProductsList = ({
  setActiveLink,
  setDisplayProduct,
  setDisplayRelatedProduct,
}: Props) => {
  const [userFavoriteList, setUserFavoriteList] = useState<ProductsData[]>([]);
  const [isError, setIsError] = useState(false);
  const navigator = useNavigate();

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

  const getRandomProducts = () => {
    const shuffled = [...allProductsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const justForYouData = getRandomProducts();

  return (
    <section className="mt-[60px] mb-28">
      {isError ? (
        <div className="flex flex-col gap-2.5">
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
                    setUserFavoriteList={setUserFavoriteList}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Favorite product list is empty</p>
      )}

      <div className="flex items-center justify-between mt-14">
        <SecondarySectionTitle secondaryTitle="Just For You" />
        <SecondaryButtonComponent text="See All" width={150} />
      </div>
      <div>
        <ul className="flex gap-8 mt-12">
          {justForYouData.map((p) => (
            <li key={p.id}>
              <ProductCard
                discount={p.discount}
                category={p.category}
                productImage={p.productImage}
                productName={p.productName}
                originalProductPrice={p.originalProductPrice}
                discountedProductPrice={p.discountedProductPrice}
                rating={p.rating}
                setDisplayProduct={setDisplayProduct}
                setDisplayRelatedProduct={setDisplayRelatedProduct}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
