import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProductById, GetProduct, searchByName } from "../api/api";
import nullData from "../assets/illustration.png";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const Product = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.AdminSlice);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleLog() {
    navigate("/login");
  }

  useEffect(() => {
    dispatch(GetProduct());
    dispatch(searchByName())
  }, []);

  return (
    <div className="w-[100%] flex">
      <Navigation />
      <div className="w-[100%] flex flex-col gap-[20px] p-[10px]">
        <div className="w-[100%] flex  justify-around gap-[550px] mt-[30px]">
          <h1 className="text-[24px] text-[#111927] font-[700]">Product</h1>
          <button
            onClick={() => {
              navigate("/addPage");
            }}
            className="w-[118px] h-[40px] bg-blue-500 text-white font-[700] rounded"
          >
            + Add order
          </button>
        </div>
        <div className="w-[100%] flex flex-wrap justify-around items-center gap-[190px]">
          <div className="flex items-center gap-[20px]  mt-[70px]">
            <TextField
              label="Search..."
              sx={{width:"250px", height:"56px"}}
              value={search}
              onChange={(e) => {
                dispatch(searchByName(e.target.value)),
                  setSearch(e.target.value);
              }}
            />
            <select
              className="pl-[20px] pr-[20px] w-[150px] h-[56px] text-[18px] outline-none border-[1px] border-solid border-[lightgray] rounded "
              name=""
              id=""
            >
              <option value="">Ready</option>
              <option value="">Shipped</option>
              <option value="">Received</option>
            </select>
          </div>
          <div className="flex items-center gap-[20px] mt-[50px]">
            <button className="hover:bg-blue-500 hover:text-white w-[50px] h-[50px] bg-transparent border-[1px] border-solid rounded border-blue-300 text-blue-500">
              <DriveFileRenameOutlineIcon />
            </button>
            <button className="hover:bg-blue-500 hover:text-white w-[50px] h-[50px] bg-transparent border-[1px] border-solid rounded border-blue-300 text-blue-500">
              <DeleteOutlineIcon />
            </button>
          </div>
        </div>

        {/* tableGet */}
        {token ? (
          <div>
            <table className="border-[1px] border-[solid] border-[lightgray] w-[80%] text-center m-auto">
              <thead className="h-[50px]">
                <tr>
                  <th>
                    <input
                      className="w-[15px] h-[15px] accent-blue-500"
                      type="checkbox"
                    />
                  </th>
                  <th className="text-start">Product</th>
                  <th>Color</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data?.data?.products?.map((element) => (
                    <tr
                      className="border-[1px] border-[solid] border-[lightgray]"
                      key={element.id}
                    >
                      <td>
                        <input
                          className="w-[15px] h-[15px] accent-blue-500"
                          type="checkbox"
                        />
                      </td>
                      <td className="flex items-center gap-[10px]">
                        <img
                          className="w-[50px] h-[50px] object-cover object-center rounded-full relative top-[5px]"
                          src={`${import.meta.env.VITE_APP_FILE_URL}${
                            element?.image
                          }`}
                          alt=""
                        />
                        <h1 className="text-[18px] font-[600]">
                          {element.productName}
                        </h1>
                      </td>
                      <td>
                        <div
                          className="w-[50px] h-[50px] rounded-[50%]"
                          style={{ backgroundColor: element.color }}
                        ></div>
                      </td>
                      <td className="text-[18px] font-[600]">
                        {element?.quantity}
                      </td>
                      <td className="text-[18px] font-[600]">
                        ${element?.price}.00
                      </td>
                      <td className="flex justify-center items-center gap-[10px] relative top-[-10px]">
                        <button className="hover:bg-blue-500 hover:text-white w-[40px] h-[40px] bg-transparent border-solid rounded border-blue-300 text-blue-500">
                          <DriveFileRenameOutlineIcon />
                        </button>
                        <button
                          onClick={() =>
                            dispatch(DeleteProductById(element.id))
                          }
                          className="hover:bg-red-500 hover:text-white w-[40px] h-[40px] bg-transparent border-solid rounded border-red-300 text-red-500"
                        >
                          <DeleteOutlineIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="m-auto flex flex-col gap-[10px] items-center justify-center">
            <img
              className=" w-[104px] h-[108px]"
              src={nullData}
              alt="Image when no token"
            />
            <h1 className="text-[20px] font-[800]">No Orders Yet</h1>
            <p className="text-[16px] text-[#5A607F] text-center">
              All the upcoming orders from your store will be visible in this
              page. <br /> You can add orders by yourself if you sell offline.{" "}
            </p>
            <button
              onClick={() => {
                handleLog();
              }}
              className="w-[140px] h-[40px] bg-blue-500 text-white text-[16px] rounded hover:bg-blue-400"
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
