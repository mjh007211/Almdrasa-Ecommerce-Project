export const TopBanner = () => {
  return (
    <div className="bg-black max-w-[1440px] mx-auto px-[136px] py-3">
      <div className="flex gap-[50px] items-center justify-between text-[14px] max-w-[859px] ml-auto text-[#fafafa]">
        <div className="flex items-center gap-2.5">
          <p className="font-Poppins font-normal">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          </p>
          <span className="font-semibold underline">ShopNow</span>
        </div>
        <div className="flex items-center gap-[5px] w-[78px] h-[24px]">
          <span>English</span>
          <span>
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
