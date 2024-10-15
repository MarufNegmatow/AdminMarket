import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FolderIcon from "@mui/icons-material/Folder";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sticky top-10 block sm:hidden md:hidden lg:hidden xl:hidden 2xl:block w-[250px]  flex-col gap-[10px] h-screen bg-[#1C2536] p-[20px]">
      <Link to={"/"}>
        <div className="w-[220px] h-[44px] hover:bg-white flex items-center gap-[10px] group p-[10px] rounded">
          <HomeIcon className="text-white group-hover:text-[#1C2536]" />
          <h1 className="text-white text-[14px] font-[600] group-hover:text-[#1C2536]">
            Dashboard
          </h1>
        </div>
      </Link>

    <Link to={"/orders"}>
    <div className="w-[220px] h-[44px] hover:bg-white flex items-center gap-[10px] group p-[10px] rounded">
        <FormatListBulletedIcon className="text-white group-hover:text-[#1C2536]" />
        <h1 className="text-white text-[14px] font-[600] group-hover:text-[#1C2536]">
          Orders
        </h1>
      </div>
      </Link>

    <Link to={"/product"}>
    <div className="w-[220px] h-[44px] hover:bg-white flex items-center gap-[10px] group p-[10px] rounded">
        <LocalOfferIcon className="text-white group-hover:text-[#1C2536]" />
        <h1 className="text-white text-[14px] font-[600] group-hover:text-[#1C2536]">
          Product
        </h1>
      </div>
    </Link>

        <Link to={"/categories"}>
      <div className="w-[220px] h-[44px] hover:bg-white flex items-center gap-[10px] group p-[10px] rounded">
        <FolderIcon className="text-white group-hover:text-[#1C2536]" />
        <h1 className="text-white text-[14px] font-[600] group-hover:text-[#1C2536]">
          Other
        </h1>
      </div>
        </Link>
    </div>
  );
};

export default Navigation;
