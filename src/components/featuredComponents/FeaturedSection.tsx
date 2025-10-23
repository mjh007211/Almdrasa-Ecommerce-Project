import { SecondarySectionTitle } from "../genericComponents/SecondarySectionTitle";
import { SectionsTitles } from "../genericComponents/SectionsTitles";
import PS5 from "/1c360f790c1817d3afa266b3c9f8c81ff0ed4428.png";
import smallSpeakers from "/e5659d572977438364a41d7e8c9d1e9a794d43ed.png";
import perfume from "/15315cd15102562cf220504d288fa568eaa816dd.png";

export const FeaturedSection = () => {
  return (
    <section className="mt-32">
      <SecondarySectionTitle secondaryTitle="Featured" />
      <div className="mt-8">
        <SectionsTitles sectionTitle="New Arrival" />
      </div>
      <div className="flex justify-between text-[#FAFAFA] mt-8">
        <div className="flex relative w-[570px] h-[600px] bg-black  p-8">
          <img
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src={PS5}
            alt=""
          />
          <div className="content-end z-10">
            <h3 className="font-Inter text-2xl font-semibold">PlayStation 5</h3>
            <p className="w-[242px] text-[14px] mt-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <div className="w-[74px] border-b border-white pb-1 mt-2.5">
              <span className="font-medium">Shop Now</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex w-[570px] h-[284px] bg-black p-8">
            <div className="content-end">
              <h3 className="font-Inter text-2xl font-semibold">
                Women’s Collections
              </h3>
              <p className="w-[242px] text-[14px] mt-2">
                Featured woman collections that give you another vibe.
              </p>
              <div className="w-[74px] border-b border-white pb-1 mt-2.5">
                <span className="font-medium">Shop Now</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="relative flex w-[270px] h-[284px] bg-gradient-to-b from-[#2a2a2a] to-[#000000] py-4 px-5">
              <img
                className="absolute left-[15%] w-full h-full object-cover"
                src={smallSpeakers}
                alt=""
              />
              <div className="content-end z-10">
                <h3 className="font-Inter text-2xl font-semibold">Speakers</h3>
                <p className="w-[242px] text-[14px] mt-2">
                  Amazon wireless speakers
                </p>
                <div className="w-[74px] border-b border-white pb-1 mt-2.5">
                  <span className="font-medium">Shop Now</span>
                </div>
              </div>
            </div>
            <div className="relative flex w-[270px] h-[284px] bg-gradient-to-b from-[#2b2b2b] to-[#0f0f0f] py-4 px-5">
              <img
                className="absolute w-full h-full object-cover"
                src={perfume}
                alt=""
              />
              <div className="content-end z-10">
                <h3 className="font-Inter text-2xl font-semibold">Perfume</h3>
                <p className="w-[242px] text-[14px] mt-2">
                  GUCCI INTENSE OUD EDP
                </p>
                <div className="w-[74px] border-b border-white pb-1 mt-2.5">
                  <span className="font-medium">Shop Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-20 mt-28">
        <div className="flex flex-col items-center">
          <svg
            width="81"
            height="80"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
              fill="#2F2E30"
            />
            <circle cx="40.5" cy="40" r="29" fill="black" />
            <g clip-path="url(#clip0_19572_331)">
              <path
                d="M32.1667 51.6667C34.0076 51.6667 35.5 50.1743 35.5 48.3333C35.5 46.4924 34.0076 45 32.1667 45C30.3257 45 28.8333 46.4924 28.8333 48.3333C28.8333 50.1743 30.3257 51.6667 32.1667 51.6667Z"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.8333 48.3335H27.5C26.3954 48.3335 25.5 47.4381 25.5 46.3335V41.6668M23.8333 28.3335H40.1666C41.2712 28.3335 42.1666 29.2289 42.1666 30.3335V48.3335M35.5 48.3335H45.5M52.1667 48.3335H53.5C54.6046 48.3335 55.5 47.4381 55.5 46.3335V38.3335M55.5 38.3335H42.1666M55.5 38.3335L51.0826 30.9712C50.7211 30.3688 50.0701 30.0002 49.3676 30.0002H42.1666"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 31.8184H32.1667"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3182 35.4546H28.9848"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 39.0908H32.1667"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_19572_331">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(20.5 20)"
                />
              </clipPath>
            </defs>
          </svg>
          <h4 className="font-semibold text-[20px] mt-8">
            FREE AND FAST DELIVERY
          </h4>
          <p className="text-[14px] mt-2.5">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
              fill="#2F2E30"
            />
            <circle cx="40" cy="40" r="29" fill="black" />
            <g clip-path="url(#clip0_19789_3530)">
              <path
                d="M33.3337 45.0001C33.3337 43.1591 31.8413 41.6667 30.0003 41.6667C28.1594 41.6667 26.667 43.1591 26.667 45.0001V48.3334C26.667 50.1744 28.1594 51.6667 30.0003 51.6667C31.8413 51.6667 33.3337 50.1744 33.3337 48.3334V45.0001Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M53.3337 45.0001C53.3337 43.1591 51.8413 41.6667 50.0003 41.6667C48.1594 41.6667 46.667 43.1591 46.667 45.0001V48.3334C46.667 50.1744 48.1594 51.6667 50.0003 51.6667C51.8413 51.6667 53.3337 50.1744 53.3337 48.3334V45.0001Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.667 45.0001V40.0001C26.667 36.4639 28.0718 33.0725 30.5722 30.572C33.0727 28.0715 36.4641 26.6667 40.0003 26.6667C43.5365 26.6667 46.9279 28.0715 49.4284 30.572C51.9289 33.0725 53.3337 36.4639 53.3337 40.0001V45.0001"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M50 51.6667C50 52.9928 48.9464 54.2646 47.0711 55.2023C45.1957 56.14 42.6522 56.6667 40 56.6667"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_19789_3530">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(20 20)"
                />
              </clipPath>
            </defs>
          </svg>

          <h4 className="font-semibold text-[20px] mt-8">
            24/7 CUSTOMER SERVICE
          </h4>
          <p className="text-[14px] mt-2.5">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM10.9071 40C10.9071 56.0675 23.9325 69.0929 40 69.0929C56.0675 69.0929 69.0929 56.0675 69.0929 40C69.0929 23.9325 56.0675 10.9071 40 10.9071C23.9325 10.9071 10.9071 23.9325 10.9071 40Z"
              fill="#2F2E30"
            />
            <circle cx="40" cy="40" r="29" fill="black" />
            <path
              d="M39.9834 22.5874C41.0049 22.5874 42.0044 22.7366 42.7578 23.0181L51.0752 26.1353H51.0762C53.2957 26.962 55.0508 29.5076 55.0508 31.8667V44.2495C55.0508 45.3367 54.7066 46.5895 54.124 47.7485C53.578 48.8348 52.8406 49.8024 52.0312 50.4556L51.8682 50.5825L44.7012 55.9321L44.6953 55.937C43.4126 56.9261 41.724 57.4331 40 57.4331C38.2773 57.433 36.5849 56.9263 35.2646 55.9478H35.2637L28.0996 50.5991C27.2269 49.9484 26.4256 48.9208 25.8428 47.7593C25.2599 46.5976 24.917 45.3447 24.917 44.2661V31.8667C24.917 29.5075 26.6719 26.9619 28.8916 26.1353H28.8926L37.209 23.0181C37.9624 22.7365 38.9618 22.5874 39.9834 22.5874ZM40.001 24.0854C39.2024 24.0876 38.3755 24.1949 37.7422 24.4312L37.7412 24.4321L29.4248 27.5483H29.4238C28.5963 27.8599 27.8551 28.5225 27.3242 29.2905C26.7931 30.0589 26.4336 30.9898 26.4336 31.8833V44.2661C26.4336 45.1606 26.7442 46.1893 27.2012 47.1011C27.6581 48.0126 28.2934 48.8726 29.001 49.4009L36.168 54.7505C37.2298 55.5444 38.6284 55.9252 40.002 55.9253C41.3759 55.9253 42.7782 55.5442 43.8477 54.7515L43.8496 54.7505L51.0156 49.4009L51.0166 49.3999C51.7314 48.8638 52.3669 48.0049 52.8223 47.0942C53.2776 46.1836 53.584 45.1596 53.584 44.2661V31.8667C53.584 30.9807 53.2236 30.0539 52.6934 29.2866C52.1628 28.5191 51.4223 27.8539 50.5977 27.5337L50.5928 27.5317L42.2754 24.4146L42.2666 24.4116C41.6285 24.1864 40.8004 24.0833 40.001 24.0854Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
            />
            <path
              d="M44.4043 34.77C44.6924 34.4822 45.1759 34.482 45.4639 34.77C45.7518 35.058 45.7516 35.5415 45.4639 35.8296L38.2969 42.9966C38.1456 43.1478 37.9578 43.2163 37.7666 43.2163C37.5756 43.2162 37.3885 43.1477 37.2373 42.9966L34.5537 40.313C34.2658 40.0249 34.2657 39.5414 34.5537 39.2534C34.8417 38.9654 35.3252 38.9655 35.6133 39.2534L37.7666 41.4067L38.1211 41.0532L44.4043 34.77Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
            />
          </svg>

          <h4 className="font-semibold text-[20px] mt-8">
            MONEY BACK GUARANTEE
          </h4>
          <p className="text-[14px] mt-2.5">We reurn money within 30 days</p>
        </div>
      </div>
      <div className="flex justify-end mt-16">
        <button
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="23"
              cy="23"
              r="23"
              transform="rotate(-90 23 23)"
              fill="#F5F5F5"
            />
            <path
              d="M23 31V15M16 22L23 15L30 22"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
