import { useContext } from "react";
import { allProductsData, type ProductsData } from "../../productsData";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router";

export const SeacrhProductsList = ({
  category,
  productImage,
  productName,
  originalProductPrice,
  discountedProductPrice,
}: ProductsData) => {
  const navigator = useNavigate();
  const { setDisplayRelatedProduct, setDisplayProduct } =
    useContext(DataContext);

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

  return (
    <a
      onClick={handleDisplayProduct}
      className="relative flex  justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-md"
    >
      <div className="flex items-center gap-4">
        <img
          className="w-[54px] h-[54px] object-contain rounded-md"
          src={productImage}
          alt={productName}
        />
        <span className="text-sm font-medium text-gray-800 truncate">
          {productName}
        </span>
      </div>

      {/* 💰 Price Section */}
      <div className="flex flex-col items-end text-sm">
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
    </a>
  );
};
