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
  setUserData?: Dispatch<SetStateAction<UserData[]>>;
  setActiveLink?: Dispatch<SetStateAction<string>>;
  setIsLogin?: Dispatch<SetStateAction<boolean>>;
  setIsAllowToSignin?: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({
  activeLink,
  isLogin,
  setUserData,
  setActiveLink,
  setIsLogin,
  setIsAllowToSignin,
}: Props) => {
  const navigator = useNavigate();
  return (
    <header className="flex items-center justify-between mt-10">
      <HeaderTitle />
      <HeaderNav activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="flex gap-5">
        <HeaderInput />
        <a onClick={() => navigator("/favorite-list")}>
          <HeartIcon />
        </a>

        <CartIcon />
        {isLogin && (
          <MyAccountIcon
            setUserData={setUserData}
            setIsLogin={setIsLogin}
            setIsAllowToSignin={setIsAllowToSignin}
            setActiveLink={setActiveLink}
          />
        )}
      </div>
    </header>
  );
};
