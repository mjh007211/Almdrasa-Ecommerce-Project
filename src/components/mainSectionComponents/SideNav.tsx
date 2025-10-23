export const SideNav = () => {
  return (
    <nav className="w-[217px] h-[100%] border-r border-[#0000003b] pt-12 pr-2.5">
      <ul className="flex flex-col h-[100%] justify-between">
        <li className="flex justify-between transition-transform duration-300 hover:scale-110">
          <a href="#">Woman’s Fashion</a>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
              fill="black"
            />
          </svg>
        </li>
        <li className="flex justify-between transition-transform duration-300 hover:scale-110">
          <a href="#">Men’s Fashion</a>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
              fill="black"
            />
          </svg>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <a href="#">Electronics</a>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <a href="#">Home & Lifestyle</a>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <a href="#">Medicine</a>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <a href="#">Sports & Outdoor</a>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <a href="#">Baby’s & Toys</a>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <a href="#">Groceries & Pets</a>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <a href="#">Health & Beauty</a>
        </li>
      </ul>
    </nav>
  );
};
