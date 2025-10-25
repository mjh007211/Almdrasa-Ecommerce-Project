import { thisMonthProductsData } from "../../productsData";
import { ProductCard } from "../genericComponents/ProductCard";
import { ButtonComponent } from "../genericComponents/ButtonComponent";
import { SecondarySectionTitle } from "../genericComponents/SecondarySectionTitle";
import { SectionsTitles } from "../genericComponents/SectionsTitles";
import speakers from "/3cc943ca7e210f637fc0504b7d93cd207df744c2.png";
import type { Props } from "../../pages/Home";

export const ThisMonthSection = ({
  setDisplayProduct,
  setDisplayRelatedProduct,
}: Props) => {
  return (
    <section className="mt-16">
      <SecondarySectionTitle secondaryTitle="This Month" />
      <div className="flex items-center justify-between mt-8">
        <SectionsTitles sectionTitle="Best Selling Products" />
        <ButtonComponent text="View All" width={159} />
      </div>
      <div className="mt-12">
        <ul className="flex gap-8">
          {thisMonthProductsData.map(
            ({
              id,
              category,
              productImage,
              productName,
              originalProductPrice,
              discountedProductPrice,
              rating,
            }) => (
              <li key={id}>
                <ProductCard
                  id={id}
                  category={category}
                  productImage={productImage}
                  productName={productName}
                  originalProductPrice={originalProductPrice}
                  discountedProductPrice={discountedProductPrice}
                  rating={rating}
                  setDisplayProduct={setDisplayProduct}
                  setDisplayRelatedProduct={setDisplayRelatedProduct}
                />
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex w-[100%] h-[500px] bg-black px-14 py-16 mt-40">
        <div>
          <span className="text-[#00FF66] font-semibold">Categories</span>
          <p className="font-Inter text-[48px] w-[441px] font-semibold text-[#fafafa] mt-5">
            Enhance Your Music Experience
          </p>
          <div className="flex gap-6 mt-5">
            <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-white">
              <span className="font-semibold">23</span>
              <span className="text-[11px]">Hours</span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-white">
              <span className="font-semibold">05</span>
              <span className="text-[11px]">Dats</span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-white">
              <span className="font-semibold">59</span>
              <span className="text-[11px]">Minutes</span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-white">
              <span className="font-semibold">35</span>
              <span className="text-[11px]">Seconds</span>
            </div>
          </div>
          <button className="bg-[#00FF66] w-[171px] h-[56px] text-center text-[#fafafa] font-medium rounded-[4px] mt-9 cursor-pointer">
            Buy Now!
          </button>
        </div>

        <img className="w-full h-full object-cover" src={speakers} alt="" />
      </div>
    </section>
  );
};
