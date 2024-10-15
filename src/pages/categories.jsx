import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import nullData from "../assets/illustration.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCategory, GetByCategory, postCategroy } from "../api/api";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
 
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import styled from "styled-components";
import FileBase64 from "react-file-base64";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Categories = () => {
  const token = localStorage.getItem("token");
  const { categore } = useSelector((state) => state.AdminSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLog() {
    navigate("/login");
  }

  useEffect(() => {
    dispatch(GetByCategory());
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [categories, setCategories] = useState(true);
  const [Brands, setBrands] = useState(false);
  const [Banners, setBanners] = useState(false);

  const [CategoryImage, setCategoryImage] = useState(
    "https://avatars.mds.yandex.net/i?id=16e1568c6cd332ae5c6bfffa13c6c531996a96e1df09497e-12623317-images-thumbs&n=13"
  );
  const [CategoryName, setCategoryName] = useState("");
  const [categoryFile, setCategoryFile] = useState("");
  console.log(CategoryName);
  const handleShowImage = (e) => {
    setCategoryImage(e.base64);
    setCategoryFile(e.file);
  };

  const handleSaveCategoty = (e) => {
    e.preventDefault();
    dispatch(postCategroy({ categoryFile, CategoryName }));
    setCategoryName("");
    setCategoryImage(
      "https://avatars.mds.yandex.net/i?id=16e1568c6cd332ae5c6bfffa13c6c531996a96e1df09497e-12623317-images-thumbs&n=13"
    );
    setOpen(false);
  };

  return (
    <div className="w-[100%] flex">
      <Navigation />
      <div>

      </div>
      <div className="w-[100%] flex flex-col gap-[20px] p-[10px]">
        <div className="w-[90%] flex items-center justify-between ml-[50px]">
        <div className="my-10 -z-50">
        <Button
          onClick={() => {
            setCategories(true);
            setBrands(false);
            setBanners(false);
          }}
          variant={`${categories ? "contained" : "text"}`}
        >
          {" "}
          Categories
        </Button>

        <Button
          onClick={() => {
            setCategories(false);
            setBrands(true);
            setBanners(false);
          }}
          variant={`${Brands ? "contained" : "text"}`}
        >
          Brands
        </Button>

        <Button
          onClick={() => {
            setCategories(false);
            setBrands(false);
            setBanners(true);
          }}
          variant={`${Banners ? "contained" : "text"}`}
        >
          {" "}
          Banners
        </Button>

      </div>

        </div>
<div>
<div>
          <div className="w-[100%] flex items-center justify-around gap-[670px]">
            <h1 className="text-[24px] text-[#111927] font-[700] ml-[-70px]">Category</h1>
            <button
              className="w-[111px] h-[40px] bg-blue-500 rounded text-[white] font-[700] "
              onClick={handleClickOpen}
            >
              + Add new
            </button>
          </div>
          {token ? (
            <div className=" flex flex-wrap gap-[20px] p-[20px]">
              {categore?.map((element) => {
                if (element.categoryImage != "") {
                  return (
                    <div
                      key={element.id}
                      className="group hover:bg-[#2b2b55] border-[2px] border-[#91919170] w-[180px] h-[180px] flex flex-col justify-evenly items-center mt-[80px]"
                    >
                      <img
                        className="w-[80px]  rounded"
                        src={
                          import.meta.env.VITE_APP_FILE_URL +
                          element?.categoryImage
                        }
                      />
                      <h1 className="text-[16px] text-center font-[100] group-hover:text-white">
                        {element?.categoryName}
                      </h1>

                      <div className="flex items-center gap-[10px] mt-[7px]">
                        <EditIcon sx={{ color: "blue", cursor: "pointer" }} />
                        <DeleteOutlineIcon
                          onClick={() => dispatch(deleteCategory(element.id))}
                          sx={{ color: "red", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  );
         }
     })}
      </div>
         ) : (
            <div className=" flex m-auto flex-col gap-[10px] items-center justify-center">
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

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ width: "400px" }}>Add Category</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSaveCategoty} action="">
              <TextField
                value={CategoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                id="outlined-basic"
                sx={{ width: "100%", marginY: "20px" }}
                label="Category name"
                variant="outlined"
              />

              <StyledWrapper>
                <label className="custum-file-upload">
                  <div className="icon">
                    <img src={CategoryImage} alt="" />
                  </div>
                  <div className="text">
                    <span>Click to upload image</span>
                  </div>
                  <FileBase64
                    multiple={false} // Adjust according to your need
                    onDone={handleShowImage}
                  />
                </label>
              </StyledWrapper>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={handleSaveCategoty}
              variant="contained"
              type="submit"
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
</div>

        
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .custum-file-upload {
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #cacaca;
    background-color: rgba(255, 255, 255, 1);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
  }

  .custum-file-upload .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .icon img {
    height: 80px;
    fill: rgba(75, 85, 99, 1);
  }

  .custum-file-upload .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .text span {
    font-weight: 400;
    color: rgba(75, 85, 99, 1);
  }

  .custum-file-upload input {
    display: none;
  }
`;

export default Categories;
