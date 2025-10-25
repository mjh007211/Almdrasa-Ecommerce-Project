import type { ProductsData } from "../../productsData";

export const CheckOutProductsList = ({
  productImage,
  productName,
  originalProductPrice,
  discountedProductPrice,
}: ProductsData) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <img className="w-[54px] h-[54px]" src={productImage} alt="" />
        <span>{productName}</span>
      </div>
      <span>${discountedProductPrice ?? originalProductPrice}</span>
    </div>
  );
};
