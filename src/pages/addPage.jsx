import React, { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import ImageTypeFile from "../components/imageTypeFile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetBrand, GetCategory, GetColor, addProduct } from "../api/api";
import toast from "react-hot-toast";

const AddPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageBase64, setImageBase64] = useState("");
  const { color } = useSelector((state) => state.AdminSlice);
  const { brand } = useSelector((state) => state.AdminSlice);
  const { subcategory } = useSelector((state) => state.AdminSlice);

  async function handleAddProduct(event) {
    event.preventDefault();
    const productObj = {
      Images: event.target["fileImage"].files[0],
      BrandId: event.target["BrandId"].value,
      ColorId: event.target["ColorId"].value,
      ProductName: event.target["Productname"].value,
      Description: event.target["discription"].value,
      Quantity: event.target["quantity"].value,
      Code: event.target["productCode"].value,
      Price: event.target["price"].value,
      HasDiscount: event.target["hasDiscount"].value,
      SubCategoryId: event.target["subCategory"].value,
    };

    let form = new FormData();
    form.append("Images", productObj.Images);
    form.append("BrandId", productObj.BrandId);
    form.append("ColorId", productObj.ColorId);
    form.append("ProductName", productObj.ProductName);
    form.append("Description", productObj.Description);
    form.append("Quantity", productObj.Quantity);
    form.append("Code", productObj.Code);
    form.append("Price", productObj.Price);
    form.append("HasDiscount", productObj.HasDiscount);
    form.append("SubCategoryId", productObj.SubCategoryId);

    const resultAdd = await dispatch(addProduct(form));
    if (addProduct.fulfilled.match(resultAdd)) {
      toast.success("Product added successfully!");
      navigate("/product"); 
    } else {
      toast.error("Error in add!");
    }
    
  }

  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    dispatch(GetColor());
    dispatch(GetBrand());
    dispatch(GetCategory());
  }, []);

  return (
    <div className="w-[100%] flex">
      <Navigation />
      <form
        onSubmit={handleAddProduct}
        className="w-[100%] flex flex-col gap-[20px] p-[10px]"
      >
        <div className="w-[100%] flex flex-col gap-[20px] p-[10px]">
          <div className="w-[100%] flex items-center justify-between">
            <h1 className="text-[24px] text-[#111927] font-[700]">
              Products \ Add new
            </h1>
            <div className="flex items-center gap-[10px]">
              <button
              onClick={() => {navigate("/product")}}
                type="button"
                className="w-[120px] hover:bg-blue-500 hover:text-white h-[40px] bg-transparent rounded text-blue-500 border-[2px] border-solid border-blue-500 font-[700]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[120px] hover:bg-transparent hover:text-blue-500 h-[40px] bg-blue-500 rounded text-white font-[600] hover:border-[2px] hover:border-solid hover:border-blue-500"
              >
                Save
              </button>
            </div>
          </div>
          <div className="w-[100%] flex flex-wrap items-start justify-center gap-[10px]">
            <div className="w-[40%] flex flex-col gap-[20px] items-center justify-center">
              <input
                placeholder="Upload product image..."
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                type="file"
                name="fileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
              <select
                name="BrandId"
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                id=""
              >
                <option value="">Brand</option>
                {brand && brand.data ? (
                  brand.data.map((element) => (
                    <option key={element.id} value={element.id}>
                        {element.brandName}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
              <select
                name="ColorId"
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                id=""
              >
                <option value="">Color</option>
                {color && color.data ? (
                  color.data.map((element) => (
                    <option key={element.id} value={element.id}>
                     {element.colorName}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
              <input
                placeholder="Enter product name..."
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                type="text"
                name="Productname"
              />
              <textarea
                name="discription"
                placeholder="Description"
                className="w-[430px] h-[100px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                cols="30"
                rows="10"
              ></textarea>
              <input
                placeholder="Enter product quantity..."
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                type="number"
                name="quantity"
              />
              <input
                placeholder="Enter product hasDiscount..."
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                type="text"
                name="hasDiscount"
                value={false}
              />
            </div>

            <div className="w-[40%] flex flex-col gap-[30px] items-center justify-center">
              <ImageTypeFile />
              <input
                placeholder="Enter product code..."
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                type="text"
                name="productCode"
              />
              <input
                placeholder="Enter product price..."
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                type="number"
                name="price"
              />
                <select
                name="subCategory"
                className="w-[430px] h-[40px] pl-[10px] border-[1px] border-solid border-gray-400 outline-none rounded-[10px] pr-[10px]"
                id=""
              >
                <option value="">SubCategory</option>
                {subcategory && subcategory.data ? (
                  subcategory.data.map((element) => (
                    <option key={element.id} value={element.id}>
                     {element.subCategoryName}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading...</option>
                )}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
