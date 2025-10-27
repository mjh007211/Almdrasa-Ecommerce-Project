import type { Dispatch, SetStateAction } from "react";
import { CartIcon } from "./CartIcon";
import { HeaderInput } from "./HeaderInput";
import { HeaderNav } from "./HeaderNav";
import { HeaderTitle } from "./HeaderTitlte";
import { HeartIcon } from "./HeartIcon";
import type { UserData } from "../../App";
import { MyAccountIcon } from "./MyAccountIcon";
import { useNavigate } from "react-router";

export type Props = {
  activeLink?: string;
  isLogin?: boolean;
  cartBadge: number | undefined;
  heartBadge: number | undefined;
  setUserData?: Dispatch<SetStateAction<UserData[]>>;
  setActiveLink?: Dispatch<SetStateAction<string>>;
  setIsLogin?: Dispatch<SetStateAction<boolean>>;
  setIsAllowToSignin?: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({
  activeLink,
  isLogin,
  cartBadge,
  heartBadge,
  setUserData,
  setActiveLink,
  setIsLogin,
  setIsAllowToSignin,
}: Props) => {
  const navigator = useNavigate();

  const handleLoginNavigator = () => {
    navigator("/login");
    setActiveLink("");
  };
  return (
    <header className="flex items-center justify-between mt-10">
      <HeaderTitle />
      <HeaderNav activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="flex gap-5">
        <HeaderInput />
        <a onClick={() => navigator("/favorite-list")}>
          <HeartIcon isLogin={isLogin} heartBadge={heartBadge} />
        </a>

        <CartIcon isLogin={isLogin} cartBadge={cartBadge} />
        {isLogin ? (
          <MyAccountIcon
            setUserData={setUserData}
            setIsLogin={setIsLogin}
            setIsAllowToSignin={setIsAllowToSignin}
            setActiveLink={setActiveLink}
          />
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
