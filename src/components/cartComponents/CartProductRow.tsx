import { useContext, useRef, useState, type ChangeEvent } from "react";
import type { ProductsData } from "../../productsData";
import { DataContext } from "../../context/DataContext";
import type { UserData } from "../../App";

export const CartProductRow = ({
  id,
  productImage,
  productName,
  originalProductPrice,
  discountedProductPrice,
  quantity = 1,
}: ProductsData) => {
  const [productSubTotal, setProductSubTotal] = useState(
    discountedProductPrice ?? originalProductPrice
  );
  const [inputValue, setInputValue] = useState(quantity.toString());
  const { userData, setUserData, setCartBadge, setUserCartList } =
    useContext(DataContext);

  const handleProductSubTotal = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    const quantity = parseInt(inputValue || "1");
    const productFinalPrice = discountedProductPrice ?? originalProductPrice;
    const subTotal = quantity * productFinalPrice;

    setProductSubTotal(subTotal);

    const findUser = userData.find((u) => u.isLogin === true);
    if (!findUser) return;

    const updatedCart = findUser.cart.map((p) =>
      p.id === id ? { ...p, quantity } : p
    );

    const updatedUsers = userData.map((u) =>
      u.isLogin === true ? { ...u, cart: updatedCart } : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUserData(updatedUsers);
    setUserCartList(updatedCart);
  };

  const handleRemoveProductCart = () => {
    const findUser = userData.find((u) => u.isLogin === true);

    const isRemoved = confirm(
      "Are you sure you want to delete this product from cart list?"
    );

    if (!isRemoved) {
      return;
    }

    const updateUserProductCart = findUser?.cart.filter((u) => u.id !== id);

    const updateUsers: UserData[] = userData.map((u) =>
      u.isLogin === true
        ? {
            ...u,
            cart: updateUserProductCart,
          }
        : u
    );

    setCartBadge((prev: number) => prev - 1);

    localStorage.setItem("users", JSON.stringify(updateUsers));
    setUserData(updateUsers);
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
          value={inputValue}
          min={1}
          onChange={(e) => handleProductSubTotal(e)}
        />
      </td>
      <td className="p-6">${productSubTotal}</td>
    </>
  );
};
