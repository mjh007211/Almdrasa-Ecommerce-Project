import { SalesContent } from "./SalesContent";
import { SideNav } from "./SideNav";

export const MainSection = () => {
  return (
    <section className="flex mt-[16px] justify-between  h-[392px]">
      <SideNav />
      <SalesContent />
    </section>
  );
};
