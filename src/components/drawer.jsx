import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FolderIcon from "@mui/icons-material/Folder";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 300,
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Link to={"/"}>
        <div className="w-[250px] h-[44px] hover:bg-[#1C2536] flex items-center gap-[10px] group p-[10px] rounded">
          <HomeIcon className="text-[#1C2536] group-hover:text-[white]" />
          <h1 className="text-[#1C2536] text-[14px] font-[600] group-hover:text-[white]">
            Dashboard
          </h1>
        </div>
      </Link>
      <Link to={"/orders"}>
        <div className="w-[250px] h-[44px] hover:bg-[#1C2536] flex items-center gap-[10px] group p-[10px] rounded">
          <FormatListBulletedIcon className="text-[#1C2536] group-hover:text-[white]" />
          <h1 className="text-[#1C2536] text-[14px] font-[600] group-hover:text-[white]">
            Orders
          </h1>
        </div>
      </Link>
      <Link to={"/product"}>
        <div className="w-[250px] h-[44px] hover:bg-[#1C2536] flex items-center gap-[10px] group p-[10px] rounded">
          <LocalOfferIcon className="text-[#1C2536] group-hover:text-[white]" />
          <h1 className="text-[#1C2536] text-[14px] font-[600] group-hover:text-[white]">
            Product
          </h1>
        </div>
      </Link>
      <Link to={"/categories"}>
        <div className="w-[250px] h-[44px] hover:bg-[#1C2536] flex items-center gap-[10px] group p-[10px] rounded">
          <FolderIcon className="text-[#1C2536] group-hover:text-[white]" />
          <h1 className="text-[#1C2536] text-[14px] font-[600] group-hover:text-[white]">
            Other
          </h1>
        </div>
      </Link>
    </Box>
  );

  return (
    <div className="flex gap-[10px]">
      <button
        className="hidden sm:block md:block lg:block xl:hidden 2xl:hidden"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ color: "white" }} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
