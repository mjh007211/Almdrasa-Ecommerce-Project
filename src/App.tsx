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
import { ScrollToTop } from "./components/genericComponents/ScrollToTop";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { type ProductsData } from "./productsData";
import { DataContext } from "./context/DataContext";
import { TopBanner } from "./components/topBanner/TopBanner";
import { Footer } from "./components/footer/Footer";

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
  userName: string | undefined;
  emailOrPhone: string | undefined;
  password: string | undefined;
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
  const [displayProduct, setDisplayProduct] = useState<ProductsData>({
    productName: "",
    productImage: "",
    originalProductPrice: 0,
    discountedProductPrice: 0,
  });
  const [displayRelatedProduct, setDisplayRelatedProduct] = useState<
    ProductsData[]
  >([]);
  const [cartBadge, setCartBadge] = useState<number | undefined>(0);
  const [heartBadge, setHeartBadge] = useState<number | undefined>(0);
  const [userFavoriteList, setUserFavoriteList] = useState<ProductsData[]>([]);
  const [userCartList, setUserCartList] = useState<ProductsData[] | undefined>(
    []
  );
  const [userSubTotal, setUserSubTotal] = useState(0);

  const getUserDataFromLocalStorge = () => {
    const getStoredUsers: UserData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const findUser = getStoredUsers.find((u) => u.isLogin === true);
    const userCartLen = findUser?.cart.length;
    const userFavoriteProductsLen = findUser?.favoriteProducts.length;
    const userCart = findUser?.cart;

    if (findUser) {
      setIsLogin(true);
      setIsAllowToSignin(false);
      setCartBadge(userCartLen);
      setHeartBadge(userFavoriteProductsLen);
      setUserCartList(userCart);
    } else {
      setIsLogin(false);
      setIsAllowToSignin(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    getUserDataFromLocalStorge();
  }, [isLogin]);

  return (
    <>
      <TopBanner />
      <div className="max-w-[1170px] mx-auto font-Poppins">
        <DataContext.Provider
          value={{
            activeLink,
            setActiveLink,
            userData,
            setUserData,
            isLogin,
            setIsLogin,
            isAllowToSignin,
            setIsAllowToSignin,
            displayProduct,
            setDisplayProduct,
            displayRelatedProduct,
            setDisplayRelatedProduct,
            cartBadge,
            setCartBadge,
            heartBadge,
            setHeartBadge,
            setUserFavoriteList,
            userFavoriteList,
            setUserCartList,
            userCartList,
            userSubTotal,
            setUserSubTotal,
          }}
        >
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <ScrollToTop />
              <Header />
              <div className="h-[1px] w-[1440px] bg-[#0000003b]  absolute left-[50%] translate-x-[-50%] top-[142px]"></div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/favorite-list"
                  element={<FavoriteProductsList />}
                />
                <Route path="/card" element={<CartList />} />
                <Route path="/check-out" element={<CheckOut />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </DataContext.Provider>
        <Footer />
      </div>
    </>
  );
}

export default App;
