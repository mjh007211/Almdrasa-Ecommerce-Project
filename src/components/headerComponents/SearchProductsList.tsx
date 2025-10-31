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
      className="relative flex justify-between items-center"
    >
      <div className="flex items-center gap-5">
        <img className="w-[54px] h-[54px]" src={productImage} alt="" />
        <span>{productName}</span>
      </div>
    </a>
  );
};
