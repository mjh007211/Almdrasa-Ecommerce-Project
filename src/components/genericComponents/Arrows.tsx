type Props = {
  scroll: (direction: "left" | "right") => void;
};

export const Arrows = ({ scroll }: Props) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => scroll("left")}
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
      >
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
      <button
        onClick={() => scroll("right")}
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
      >
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
  );
};
