import { useNavigate } from "react-router";
import { ButtonComponent } from "../components/genericComponents/ButtonComponent";
import { SecondaryButtonComponent } from "../components/genericComponents/SecondaryButtonComponent";
import { useContext, useEffect, useState } from "react";
import { CartProductRow } from "../components/cartComponents/CartProductRow";
import { DataContext } from "../context/DataContext";

export const CartList = () => {
  const navigator = useNavigate();
  const [isError, setIsError] = useState(false);
  const { userData, userCartList, setActiveLink, setUserCartList } =
    useContext(DataContext);

  useEffect(() => {
    const findUser = userData.find((u) => u.isLogin === true);

    if (!findUser) {
      setIsError(true);
      return;
    }

    setUserCartList(findUser.cart);
  }, [userData, setUserCartList]);

  const handleNavigate = () => {
    navigator("/sign-up");
    setActiveLink("Sign Up");
  };

  return (
    <section className="mt-[60px] mb-28">
      <div className="flex gap-3 text-[14px]">
        <span className="text-[#0000003b]">Home</span> <span>/</span>
        Cart
      </div>
      {isError ? (
        <div className="flex flex-col gap-2.5">
          <p className="mt-5">
            Sign up/Log in to see/add your products to your cart.
          </p>
          <a onClick={handleNavigate}>
            <ButtonComponent text="Sign up/Log in" width={159} />
          </a>
        </div>
      ) : userCartList?.length ? (
        <>
          <table className="mt-20 w-[100%] border-separate border-spacing-y-[40px]">
            <thead>
              <tr className="shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]">
                <td className="p-6">Product</td>
                <td className="p-6">Price</td>
                <td className="p-6">Quantity</td>
                <td className="p-6">Subtotal</td>
              </tr>
            </thead>
            <tbody>
              {userCartList?.map((p) => (
                <tr
                  className="shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]"
                  key={p.id}
                >
                  <CartProductRow
                    id={p.id}
                    productImage={p.productImage}
                    productName={p.productName}
                    originalProductPrice={p.originalProductPrice}
                    discountedProductPrice={p.discountedProductPrice}
                  />
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between">
            <SecondaryButtonComponent text="Return To Shop" width={218} />
            <SecondaryButtonComponent text="Update Cart" width={195} />
          </div>
          <div className="flex justify-between mt-16">
            <div className="flex gap-4 h-[56px]">
              <input
                className="w-[300px] border p-6 rounded-[4px]"
                name="coupon"
                type="text"
                placeholder="Coupon Code"
              />
              <ButtonComponent text="Apply Coupon" width={211} />
            </div>
            <div className="border rounded-[4px] py-8 px-5 w-[470px]">
              <h4 className="text-[20px] font-medium">Cart Total</h4>
              <div className="flex flex-col gap-5 mt-6">
                <div className="flex items-center justify-between border-b pb-2.5">
                  <span>Subtotal:</span>
                  <span>$0</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2.5">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex items-center justify-between mb-2.5">
                  <span>Total:</span>
                  <span>$0</span>
                </div>
              </div>
              <div className="flex justify-center">
                <a onClick={() => navigator("/check-out")}>
                  <ButtonComponent text="Procees to checkout" width={260} />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="mt-5">Your Cart is empty</p>
      )}
    </section>
  );
};
