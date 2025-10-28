import { useContext } from "react";
import { CartIcon } from "./CartIcon";
import { HeaderInput } from "./HeaderInput";
import { HeaderNav } from "./HeaderNav";
import { HeaderTitle } from "./HeaderTitlte";
import { HeartIcon } from "./HeartIcon";
import { MyAccountIcon } from "./MyAccountIcon";
import { useNavigate } from "react-router";
import { DataContext } from "../../context/DataContext";

export const Header = () => {
  const navigator = useNavigate();
  const { setActiveLink, isLogin } = useContext(DataContext);

  const handleLoginNavigator = () => {
    navigator("/login");
    setActiveLink("");
  };
  return (
    <header className="flex items-center justify-between mt-10">
      <HeaderTitle />
      <HeaderNav />
      <div className="flex gap-5">
        <HeaderInput />
        <a onClick={() => navigator("/favorite-list")}>
          <HeartIcon />
        </a>

        <CartIcon />
        {isLogin ? (
          <MyAccountIcon />
        ) : (
          <a
            onClick={handleLoginNavigator}
            className="font-medium text-[#FAFAFA] bg-[#DB4444] rounded-[4px] py-1.5 px-4 text-center block cursor-pointer hover:bg-[#db4444a1] transition duration-300  hover:scale-105"
          >
            Login
          </a>
        )}
      </div>
    </header>
  );
};
