import TextField from "@mui/material/TextField";
import { ButtonComponent } from "../components/genericComponents/ButtonComponent";
import signinImage from "/75f394c0a1c7dc5b68a42239311e510f54d8cd59.jpg";
import type { UserData } from "../App";
import { useContext, useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../context/DataContext";

export const Login = () => {
  const navigator = useNavigate();

  const [isError, setIsError] = useState<"userNotFound" | "invalidUser" | null>(
    null
  );
  const emailOrPhoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setActiveLink, setUserData, setIsAllowToSignin, setIsLogin } =
    useContext(DataContext);

  const userInvaildMessage = "Email/Passaword incorrect. Try again.";
  const UserNotFoundMessage =
    "Sorry, there is no user registered with the entered email/phone. Try again.";

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const getStoredUsers: UserData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const emailOrPhone = emailOrPhoneRef.current?.value;
    const password = passwordRef.current?.value;

    const findUser = getStoredUsers.find(
      (u) => u.emailOrPhone === emailOrPhone || u.password === password
    );

    if (!findUser) {
      setIsError("userNotFound");
      return;
    }

    if (
      findUser.emailOrPhone !== emailOrPhone ||
      findUser.password !== password
    ) {
      setIsError("invalidUser");
      return;
    }

    const updateUsers: UserData[] = getStoredUsers.map((u) =>
      u.emailOrPhone === findUser.emailOrPhone
        ? { ...u, isLogin: true }
        : { ...u, isLogin: false }
    );

    localStorage.setItem("users", JSON.stringify(updateUsers));
    setUserData(updateUsers);
    setIsLogin(true);
    setIsAllowToSignin(false);

    setActiveLink("Home");
    navigator("/");
  };

  return (
    <section className="flex mt-[60px] mb-12">
      <div className="relative left-[-135px] w-[805px] h-[781px] bg-[#CFE6EB]">
        <img className="w-full h-full object-cover" src={signinImage} alt="" />
      </div>
      <div className="content-center">
        <h2 className="font-Inter font-medium text-4xl">Log in to Exclusive</h2>
        <p className="mt-5">Enter your details below</p>
        <form
          onSubmit={(e) => handleLogin(e)}
          className="relative flex flex-col gap-10 mt-12"
        >
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Email or phone number"
            variant="standard"
            name="email"
            inputRef={emailOrPhoneRef}
            required
            onChange={() => setIsError(null)}
          />
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            inputRef={passwordRef}
            required
            name="password"
            onChange={() => setIsError(null)}
          />
          <div className="flex items-center justify-between">
            <ButtonComponent text="Log In" width={143} />
            <span className="text-[#DB4444] cursor-pointer">
              Forget Password?
            </span>
          </div>
          <p className="absolute left-0 -bottom-13 text-[14px] text-red-600">
            {isError === "invalidUser" ? userInvaildMessage : ""}
            {isError === "userNotFound" ? UserNotFoundMessage : ""}
          </p>
        </form>
      </div>
    </section>
  );
};
