import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import undefine from "../assets/illustration.png";
import logo from "../assets/Group 1116606595.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { deleteToken, getToken } from "../utils/token";
import { Button, IconButton, Popover } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const user = getToken();

  useEffect(() => {}, [user]);

  function handleDeleteToken() {
    deleteToken();
    // navigate("/login");
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div className="w-[100%] sticky top-0 pt-[10px] pb-[10px] justify-center bg-[#1C2536] flex items-center">
        <div className="w-[95%] m-auto flex flex-wrap items-center gap-[30px] justify-between">
          <div className="flex flex-wrap justify-center items-center gap-[20px]">
            <img
              className="hover:cursor-pointer"
              src={logo}
              alt=""
            />
            <div className="flex items-center">
              <SearchIcon sx={{ color: "white" }} />
              <input
                type="text"
                className="w-[200px] h-[30px] outline-none border-none bg-transparent placeholder:text-white text-white pl-[10px]"
                placeholder="Search..."
                name=""
                id=""
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[20px]">
            <NotificationsNoneIcon sx={{ color: "white" }} />
            <div className="flex items-center gap-[10px]">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-[#1FD286] text-[18px] font-[700] flex items-center justify-center text-white">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <h1 className="text-[16px] text-white ">{user?.name}</h1>
          <div>
          <IconButton onClick={handleClick} aria-label="delete" size="small">
                <ExpandMoreIcon sx={{color:"white"}} fontSize="small" />
              </IconButton>
              <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <div className="flex flex-col p-4 bg-black text-white">
                <Button
                  startIcon={<PersonIcon />}
                  onClick={() => {
                    handleClose();
                  }}
                  style={{ justifyContent: "flex-start", color: "white" }}
                >
                  Account
                </Button>
                <Button
                  startIcon={<LogoutIcon />}
                  onClick={() => {
                    handleDeleteToken(), handleClose();
                  }}
                  style={{ justifyContent: "flex-start", color: "white" }}
                >
                  Logout
                </Button>
              </div>
            </Popover>
          </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
