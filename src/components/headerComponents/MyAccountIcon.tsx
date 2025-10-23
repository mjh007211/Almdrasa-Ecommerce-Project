import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  AccountCircle,
  ShoppingBag,
  Cancel,
  Star,
  Logout,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import type { UserData } from "../../App";
import type { Props } from "./Header";

export const MyAccountIcon = ({
  setUserData,
  setIsLogin,
  setIsAllowToSignin,
  setActiveLink,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);

  const open = Boolean(anchorEl);
  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/my-account") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsActive(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsActive(false);
  };

  const handleLogout = () => {
    const getStoredUsers: UserData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const hasLogout = confirm("Are you sure you want to log out?");

    if (!hasLogout) return;

    const updateUsers: UserData[] = getStoredUsers.map((u) =>
      u.isLogin === true ? { ...u, isLogin: false } : u
    );

    localStorage.setItem("users", JSON.stringify(updateUsers));
    setUserData(updateUsers);
    setIsLogin(false);
    setIsAllowToSignin(true);
    setActiveLink("Home");
    navigator("/");
  };

  return (
    <div>
      <Button
        sx={{
          padding: "0",
          margin: "0",
          minWidth: "auto",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          boxShadow: "none",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div
          className={isActive ? "bg-[#DB4444] rounded-full p-1 text-white" : ""}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
              stroke={isActive ? "white" : "black"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
              stroke={isActive ? "white" : "black"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #2c2c2c, #4b2c4b)",
            color: "white",
            borderRadius: "12px",
            paddingY: "4px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
            minWidth: 220,
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", gap: 2, alignItems: "center" }}
        >
          <AccountCircle sx={{ color: "white" }} />
          <a onClick={() => navigator("/my-account")}>Manage My Account</a>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", gap: 2, alignItems: "center" }}
        >
          <ShoppingBag sx={{ color: "white" }} />
          My Order
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", gap: 2, alignItems: "center" }}
        >
          <Cancel sx={{ color: "white" }} />
          My Cancellations
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", gap: 2, alignItems: "center" }}
        >
          <Star sx={{ color: "white" }} />
          My Reviews
        </MenuItem>
        <button onClick={handleLogout}>
          <MenuItem
            onClick={handleClose}
            sx={{ display: "flex", gap: 2, alignItems: "center" }}
          >
            <Logout sx={{ color: "white" }} />
            Log Out
          </MenuItem>
        </button>
      </Menu>
    </div>
  );
};
