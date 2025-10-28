import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { DataContext } from "../../context/DataContext";

export const HeaderNav = () => {
  const navigator = useNavigate();
  const routeLocations = useLocation();
  const { activeLink, setActiveLink } = useContext(DataContext);

  const validRoutes = [
    "/",
    "/login",
    "/sign-up",
    "/about",
    "/contact",
    "/product",
    "/favorite-list",
    "/card",
    "/check-out",
    "/my-account",
  ];

  const isInvalidRoute = !validRoutes.includes(routeLocations.pathname);
  const disableNavUnderline =
    [
      "/login",
      "/product",
      "/favorite-list",
      "/card",
      "/check-out",
      "/my-account",
    ].includes(routeLocations.pathname) || isInvalidRoute;

  const handleOnClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    event.preventDefault();
    setActiveLink(link);
    if (link === "Home") {
      navigator("/");
    } else {
      navigator(`/${link.toLocaleLowerCase().replace(" ", "-")}`);
    }
  };

  return (
    <nav>
      <ul className="flex gap-14">
        {["Home", "Contact", "About", "Sign Up"].map((link) => (
          <li key={link}>
            <a
              onClick={(event) => handleOnClick(event, link)}
              className={`hover:underline cursor-pointer   ${
                activeLink === link && !disableNavUnderline ? "underline" : ""
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
