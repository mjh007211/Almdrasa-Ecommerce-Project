import { ButtonComponent } from "../components/genericComponents/ButtonComponent";
import { SectionsTitles } from "../components/genericComponents/SectionsTitles";
import bkashImage from "/bacbff99a8fc8e50822cb2d2d168e5d0e8bf7ea6.png";
import visaImage from "/cfb0a6ee01b240273b40dab07f8246ef98aed88a.png";
import masterImage from "/6eefb61d27c754abac218d25d8ea4360de61f8e8.png";
import nagadImage from "/b28e31b9c88d0c9b038b82deeb0523d82cffe267.png";
import { useContext, useEffect, useState, type FormEvent } from "react";
import type { ProductsData } from "../productsData";
import { CheckOutProductsList } from "../components/checkoutComponents/CheckOutProductsList";
import { DataContext } from "../context/DataContext";

export const CheckOut = () => {
  const [userProducts, setUserProducts] = useState<ProductsData[] | undefined>(
    []
  );
  const { userData } = useContext(DataContext);

  useEffect(() => {
    const findUser = userData.find((u) => u.isLogin === true);

    setUserProducts(findUser?.cart);
  }, [userData]);

  const handleUserBillingDetails = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="mt-[60px] mb-28">
      <div className="flex gap-3 text-[14px] text-[#0000003b]">
        <span>Account</span>
        <span>/</span>
        <span>My Account</span>
        <span>/</span>
        <span>Product</span>
        <span>/</span>
        <span>View Cart</span>
        <span>/</span>
        <span className="text-black">CheckOut</span>
      </div>
      <div className="mt-20">
        <SectionsTitles sectionTitle="Billing Details" />
      </div>
      <div className="flex mt-10 justify-between">
        <div className="w-[470px]">
          <form
            onSubmit={(e) => handleUserBillingDetails(e)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2 ">
              <label className="text-[#0000003b]">
                First Name<span className="text-orange-600">*</span>
              </label>
              <input className="w-[100%] h-[50px] bg-[#F5F5F5]" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#0000003b]">Company Name</label>
              <input className="w-[100%] h-[50px] bg-[#F5F5F5]" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#0000003b]">
                Street Address<span className="text-orange-600">*</span>
              </label>
              <input className="w-[100%] h-[50px] bg-[#F5F5F5]" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#0000003b]">
                Apartment, floor, etc. (optional)
              </label>
              <input className="w-[100%] h-[50px] bg-[#F5F5F5]" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#0000003b]">
                Town/City<span className="text-orange-600">*</span>
              </label>
              <input className="w-[100%] h-[50px] bg-[#F5F5F5]" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#0000003b]">
                Phone Number<span className="text-orange-600">*</span>
              </label>
              <input className="w-[100%] h-[50px] bg-[#F5F5F5]" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#0000003b]">
                Email Address<span className="text-orange-600">*</span>
              </label>
              <input className="w-[100%] h-[50px] bg-[#F5F5F5]" type="text" />
            </div>
            <div className="flex gap-4">
              <input
                className="appearance-none w-[24px] h-[24px] rounded-[4px] border border-[#0000003b] checked:bg-[#DB4444] checked:before:content-['✔'] checked:before:text-white 
         checked:before:flex checked:before:items-center checked:before:justify-center checked:border-[#DB4444]"
                type="checkbox"
                name="save"
                id=""
              />
              <p className="text-black">
                Save this information for faster check-out next time
              </p>
            </div>
          </form>
        </div>
        <div className="pt-[32px]">
          <div className="w-[422px]">
            <ul className="flex flex-col gap-8">
              {userProducts?.map((p) => (
                <li key={p.id}>
                  <CheckOutProductsList
                    productName={p.productName}
                    productImage={p.productImage}
                    originalProductPrice={p.originalProductPrice}
                    discountedProductPrice={p.discountedProductPrice}
                  />
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-5 mt-8">
              <div className="flex items-center justify-between border-b pb-2.5">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex items-center justify-between border-b pb-2.5">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between mb-2.5">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex flex-col gap-9">
                <div className="flex gap-4">
                  <input
                    className="w-[24px] h-[24px] accent-black"
                    name="pay"
                    id="bank"
                    type="radio"
                  />
                  <label htmlFor="bank">Bank</label>
                </div>
                <div className="flex gap-4">
                  <input
                    className="w-[24px] h-[24px] accent-black"
                    name="pay"
                    id="bank"
                    type="radio"
                  />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </div>
              <div className="flex gap-2">
                <img
                  className="w-[37.8px] h-[16.8px]"
                  src={bkashImage}
                  alt=""
                />
                <img className="w-[37.8px] h-[11.2px]" src={visaImage} alt="" />
                <img
                  className="w-[39.2px] h-[25.2px]"
                  src={masterImage}
                  alt=""
                />
                <img
                  className="w-[39.2px] h-[18.2px]"
                  src={nagadImage}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex gap-4">
              <input
                className="w-[300px] h-[56px] border p-6 rounded-[4px]"
                name="coupon"
                type="text"
                placeholder="Coupon Code"
              />
              <ButtonComponent text="Apply Coupon" width={211} />
            </div>
            <div className="mt-8">
              <ButtonComponent text="Place Order" width={190} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
