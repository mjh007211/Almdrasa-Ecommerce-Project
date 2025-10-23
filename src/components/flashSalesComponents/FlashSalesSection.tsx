import { Arrows } from "../genericComponents/Arrows";
import { ProductCard } from "./ProductCard";
import { SalesCountdownTimer } from "./SalesCountdownTimer";
import { SecondarySectionTitle } from "../genericComponents/SecondarySectionTitle";
import { SectionsTitles } from "../genericComponents/SectionsTitles";
import { ButtonComponent } from "../genericComponents/ButtonComponent";
import { useRef } from "react";
import { flashSalesProductsData } from "../../productsData";

export const FlashSalesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="mt-40">
      <SecondarySectionTitle secondaryTitle="Today’s" />
      <div className="flex justify-between mt-8">
        <div className="flex items-center gap-20">
          <SectionsTitles sectionTitle="Flash Sales" />
          <SalesCountdownTimer />
        </div>
        <Arrows scroll={scroll} />
      </div>
      <div
        ref={scrollRef}
        className="mt-12 w-[1308px] overflow-hidden scroll-smooth overflow-x-auto"
      >
        <ul className="flex gap-8">
          {flashSalesProductsData.map(
            ({
              id,
              productImage,
              productName,
              discount,
              originalProductPrice,
              discountedProductPrice,
              rating,
            }) => (
              <li key={id}>
                <ProductCard
                  id={id}
                  productImage={productImage}
                  productName={productName}
                  discount={discount}
                  originalProductPrice={originalProductPrice}
                  discountedProductPrice={discountedProductPrice}
                  rating={rating}
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
