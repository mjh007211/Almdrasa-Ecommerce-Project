import { ourProductsData } from "../../productsData";
import { ProductCard } from "../genericComponents/ProductCard";
import { ButtonComponent } from "../genericComponents/ButtonComponent";
import { SecondarySectionTitle } from "../genericComponents/SecondarySectionTitle";
import { SectionsTitles } from "../genericComponents/SectionsTitles";
import type { Props } from "../../pages/Home";

export const OurProductSection = ({ setDisplayProduct }: Props) => {
  return (
    <section className="mt-16">
      <SecondarySectionTitle secondaryTitle="Our Products" />
      <div className="flex items-center justify-between mt-8">
        <SectionsTitles sectionTitle="Explore Our Products" />
        <div className="flex gap-2">
          <button className="cursor-pointer transition-transform duration-300 hover:scale-110">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M22 16L15 23L22 30M15 23H31"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="cursor-pointer transition-transform duration-300 hover:scale-110">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M14.5 23H31M31 23L24 16M31 23L24 30"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-12">
        <ul className="flex flex-wrap gap-7">
          {ourProductsData.map(
            ({
              id,
              category,
              productImage,
              productName,
              originalProductPrice,
              rating,
            }) => (
              <li key={id}>
                <ProductCard
                  id={id}
                  category={category}
                  productImage={productImage}
                  productName={productName}
                  originalProductPrice={originalProductPrice}
                  rating={rating}
                  setDisplayProduct={setDisplayProduct}
                />
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex justify-center mt-12">
        <ButtonComponent text="View all products" width={234} />
      </div>
    </section>
  );
};
