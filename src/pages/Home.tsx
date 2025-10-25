import type { Dispatch, SetStateAction } from "react";
import { CategoriesSection } from "../components/categoriesComponents/CategoriesSection";
import { FeaturedSection } from "../components/featuredComponents/FeaturedSection";
import { FlashSalesSection } from "../components/flashSalesComponents/FlashSalesSection";
import { MainSection } from "../components/mainSectionComponents/MainSection";
import { OurProductSection } from "../components/ourProductComponents/OurProductSection";
import { ThisMonthSection } from "../components/thisMonthComponents/ThisMonthSection";
import type { ProductsData } from "../productsData";

export type Props = {
  setDisplayProduct: Dispatch<SetStateAction<ProductsData>>;
};

export const Home = ({ setDisplayProduct }: Props) => {
  return (
    <div className="container max-w-[1170px] mx-auto font-Poppins">
      <MainSection />
      <FlashSalesSection setDisplayProduct={setDisplayProduct} />
      <div className="h-[1px] bg-[#0000003b] w-[100%] mt-11"></div>
      <CategoriesSection />
      <div className="h-[1px] bg-[#0000003b] w-[100%] mt-11"></div>
      <ThisMonthSection setDisplayProduct={setDisplayProduct} />
      <OurProductSection setDisplayProduct={setDisplayProduct} />
      <FeaturedSection />
    </div>
  );
};
