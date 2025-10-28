import { useContext, useRef, useState } from "react";
import type { ProductsData } from "../../productsData";
import type { UserData } from "../../App";
import { DataContext } from "../../context/DataContext";

export const CartProductRow = ({
  id,
  productImage,
  productName,
  originalProductPrice,
  discountedProductPrice,
}: ProductsData) => {
  const [productSubTotal, setProductSubTotal] = useState(
    discountedProductPrice ?? originalProductPrice
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const { setCartBadge, setUserCartList } = useContext(DataContext);

  const handleProductSubTotal = () => {
    const inputValue = inputRef.current?.value;

    if (inputValue === "1") {
      setProductSubTotal(discountedProductPrice ?? originalProductPrice);
    }

    const subTotal =
      parseInt(inputValue) * (discountedProductPrice ?? originalProductPrice);
    setProductSubTotal(subTotal);
  };

  const handleRemoveProductCart = () => {
    const getStoredUsers: UserData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const findUser = getStoredUsers.find((u) => u.isLogin === true);

    const isRemoved = confirm(
      "Are you sure you want to delete this product from cart list?"
    );

    if (!isRemoved) {
      return;
    }

    const updateUserProductCart = findUser?.cart.filter((u) => u.id !== id);

    const updateUsers = getStoredUsers.map((u) =>
      u.isLogin === true
        ? {
            ...u,
            cart: updateUserProductCart,
          }
        : u
    );

    setCartBadge((prev: number) => prev - 1);

    localStorage.setItem("users", JSON.stringify(updateUsers));
    setUserCartList(updateUserProductCart);
  };

  return (
    <>
      <td className="p-6">
        <div className="flex items-center gap-5">
          <div className="group flex items-center gap-2">
            <button
              onClick={handleRemoveProductCart}
              className="opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="#DB4444" />
                <path
                  d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <img className="w-[54px] h-[54px]" src={productImage} alt="" />
          </div>

          <span>{productName}</span>
        </div>
      </td>

      <td className="p-6">${discountedProductPrice ?? originalProductPrice}</td>

      <td className="p-6">
        <input
          className="border rounded-[4px] border-[#0000003b] w-[72px]"
          type="number"
          name="quantity"
          defaultValue={1}
          min={1}
          ref={inputRef}
          onClick={handleProductSubTotal}
        />
      </td>
      <td className="p-6">${productSubTotal}</td>
    </>
  );
};
