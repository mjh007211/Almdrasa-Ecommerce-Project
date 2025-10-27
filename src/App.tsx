import { Header } from "./components/headerComponents/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { FavoriteProductsList } from "./pages/FavoriteProductsList";
import { CartList } from "./pages/CartList";
import { CheckOut } from "./pages/CheckOut";
import { MyAccount } from "./pages/MyAccount";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Product } from "./pages/Product";
import QRCode from "/991387c05dd6d44594e01b675513068803e2426d.jpg";
import GooglePlay from "/a61d4c7110b18ab55a1e1a07ebf54a46ebb07284.png";
import ApplePlay from "/38932d5accb54c528f9bcf326ca48ea29bd6d890.png";
import { ScrollToTop } from "./components/genericComponents/ScrollToTop";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { allProductsData, type ProductsData } from "./productsData";

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          display: "none",
        },
      },
    },
  },
});

export type UserData = {
  userName: string;
  emailOrPhone: string;
  password: string;
  isLogin: boolean;
  favoriteProducts: ProductsData[];
  cart: ProductsData[];
};

function App() {
  const [activeLink, setActiveLink] = useState("Home");
  const [userData, setUserData] = useState<UserData[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );
  const [isLogin, setIsLogin] = useState(false);
  const [isAllowToSignin, setIsAllowToSignin] = useState(true);
  const [displayProduct, setDisplayProduct] = useState<ProductsData>({});
  const [displayRelatedProduct, setDisplayRelatedProduct] =
    useState<ProductsData[]>(allProductsData);
  const [cartBadge, setCartBadge] = useState<number | undefined>(0);
  const [heartBadge, setHeartBadge] = useState<number | undefined>(0);

  const getUserDataFromLocalStorge = () => {
    const getStoredUsers: UserData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const findUser = getStoredUsers.find((u) => u.isLogin === true);

    const userCartLen = findUser?.cart.length;
    const userFavoriteProductsLen = findUser?.favoriteProducts.length;

    const anyUserLogin = getStoredUsers.some((u) => u.isLogin === true);

    if (anyUserLogin) {
      setIsLogin(true);
      setIsAllowToSignin(false);
      setCartBadge(userCartLen);
      setHeartBadge(userFavoriteProductsLen);
    } else {
      setIsLogin(false);
      setIsAllowToSignin(true);
    }
  };

  useEffect(() => {
    getUserDataFromLocalStorge();
  }, []);

  console.log({ displayRelatedProduct });

  return (
    <>
      <div className="bg-black max-w-[1440px] mx-auto px-[136px] py-3">
        <div className="flex gap-[50px] items-center justify-between text-[14px] max-w-[859px] ml-auto text-[#fafafa]">
          <div className="flex items-center gap-2.5">
            <p className="font-Poppins font-normal">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
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
      <div className="max-w-[1170px] mx-auto font-Poppins">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ScrollToTop />
            <Header
              activeLink={activeLink}
              isLogin={isLogin}
              cartBadge={cartBadge}
              heartBadge={heartBadge}
              setUserData={setUserData}
              setActiveLink={setActiveLink}
              setIsLogin={setIsLogin}
              setIsAllowToSignin={setIsAllowToSignin}
            />
            <div className="h-[1px] w-[1440px] bg-[#0000003b]  absolute left-[50%] translate-x-[-50%] top-[142px]"></div>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setDisplayProduct={setDisplayProduct}
                    setDisplayRelatedProduct={setDisplayRelatedProduct}
                    setCartBadge={setCartBadge}
                    setHeartBadge={setHeartBadge}
                  />
                }
              />
              <Route
                path="/sign-up"
                element={
                  <SignUp
                    userData={userData}
                    isAllowToSignin={isAllowToSignin}
                    isLogin={isLogin}
                    setIsAllowToSignin={setIsAllowToSignin}
                    setActiveLink={setActiveLink}
                    setUserData={setUserData}
                    setIsLogin={setIsLogin}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <Login
                    setUserData={setUserData}
                    setIsLogin={setIsLogin}
                    setActiveLink={setActiveLink}
                    setIsAllowToSignin={setIsAllowToSignin}
                  />
                }
              />
              <Route
                path="/favorite-list"
                element={
                  <FavoriteProductsList
                    setDisplayProduct={setDisplayProduct}
                    setActiveLink={setActiveLink}
                    setDisplayRelatedProduct={setDisplayRelatedProduct}
                    setHeartBadge={setHeartBadge}
                    setCartBadge={setCartBadge}
                  />
                }
              />
              <Route
                path="/card"
                element={
                  <CartList
                    setActiveLink={setActiveLink}
                    setCartBadge={setCartBadge}
                  />
                }
              />
              <Route path="/check-out" element={<CheckOut />} />
              <Route
                path="/my-account"
                element={<MyAccount userData={userData} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/product"
                element={
                  <Product
                    displayProduct={displayProduct}
                    displayRelatedProduct={displayRelatedProduct}
                    setDisplayProduct={setDisplayProduct}
                    setDisplayRelatedProduct={setDisplayRelatedProduct}
                    setCartBadge={setCartBadge}
                    setHeartBadge={setHeartBadge}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
        <footer className="w-[1440px] h-[440px] absolute left-[50%] translate-x-[-50%] mt-8 pt-16 text-[#FAFAFA] bg-black">
          <div className="container max-w-[1170px] mx-auto">
            <div className="flex gap-20">
              <div className="flex flex-col gap-4 ">
                <h4 className="text-2xl font-bold">Exclusive</h4>
                <h5 className="text-[20px] font-medium">Subscribe</h5>
                <p>Get 10% off your first order</p>
                <input
                  className="placeholder:text-[#0000003b] outline outline-[#fafafa] rounded-[4px] w-[217px] py-2.5 px-5"
                  type="text"
                  placeholder="Enter your email"
                  name="search"
                />
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <h4 className="text-2xl font-bold">Support</h4>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <span>+88015-88888-9999</span>
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <h4 className="text-2xl font-bold">Account</h4>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <h4 className="text-2xl font-bold">Quick Link</h4>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <h4 className="text-2xl font-bold">Download App</h4>
                <p>Save $3 with App New User Only</p>
                <div className="flex gap-2">
                  <img
                    className="w-[80px] h-[80px] border border-white"
                    src={QRCode}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <img
                      className="relative top-[-27px]"
                      src={GooglePlay}
                      alt=""
                    />
                    <img
                      className="relative top-[-38px]"
                      src={ApplePlay}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
