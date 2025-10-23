import phoneImage from "/dc40ba897215f42e5883a64157f0aa3a4d1a866a.jpg";
import appleIcon from "/1126a357e5011a6f245df4c38eae015c7c9ccbe7.png";

export const SalesContent = () => {
  return (
    <div className="mt-12 relative w-[892px] h-[344px] bg-black text-white px-12 pt-10 overflow-hidden">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex w-[204px] items-center justify-between">
            <img className="w-[60px] h-[60px]" src={appleIcon} alt="" />
            <span>iPhone 14 Series</span>
          </div>
          <p className="font-Inter text-[48px] w-[289px] font-semibold">
            Up to 10% off Voucher
          </p>
          <div className="flex gap-2.5">
            <div className="w-[74px] border-b border-white pb-1">
              <span className="font-medium">Shop Now</span>
            </div>
            <div className="pt-1">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 8H18M18 8L11 1M18 8L11 15"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <img className="aspect-auto h-[284px]" src={phoneImage} alt="" />
      </div>
      <div className="flex gap-3 justify-center">
        <span className="bg-[#7B808B] w-[12px] h-[12px] rounded-full"></span>
        <span className="bg-[#7B808B] w-[12px] h-[12px] rounded-full"></span>
        <span className="bg-white flex justify-center items-center relative before:content-[''] before:absolute  before:w-[9px] before:h-[9px] before:bg-[#DB4444] before:rounded-full w-[12px] h-[12px] rounded-full"></span>
        <span className="bg-[#7B808B] w-[12px] h-[12px] rounded-full"></span>
        <span className="bg-[#7B808B] w-[12px] h-[12px] rounded-full"></span>
      </div>
    </div>
  );
};
