import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { getToken } from './../utils/token';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const user = getToken()




export const GetProduct = createAsyncThunk("counter/GetProduct", async () => {
    try {
      const { data } = await axiosRequest.get("/Product/get-products");
      return data;
    } catch (error) {
      console.error(error);
    }
});

export const GetMyProduct = createAsyncThunk("counter/GetMyProduct", async (user) => {
    try {
      const { data } = await axiosRequest.get(`/Product/get-products?UserId=${user.sid}`);
      console.log(user.sid);
      return data;
    } catch (error) {
      console.error(error);
    }
});

export const getOrder = createAsyncThunk("counter/getOrder", async () => {
    try {
      const { data } = await axiosRequest.get("/Cart/get-products-from-cart");
      return data;
    } catch (error) {
      console.error(error);
    }
});

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axiosRequest.post("/Account/Login", credentials);
    if (data.statusCode === 200) {
      return data.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    toast.error("Error logging in");
    return rejectWithValue(error.response.data);
  }
});

export const addProduct = createAsyncThunk("counter/addProduct", async (productObj, { dispatch }) => {
  try {
    const { data } = await axiosRequest.post(`/Product/add-product`, productObj, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });


    if (data.statusCode === 200) {
      toast.success("Product added successfully");
    } else {
      toast.error("Error in add!");
    }

    dispatch(GetProduct());
  } catch (error) {
    console.error("Error adding product:", error.response ? error.response.data : error.message);
    toast.error("An error occurred while adding the product.");
  }
});



export const GetByCategory = createAsyncThunk("counter/GetByCategory", async () => {
  try {
    const { data } = await axiosRequest.get("/Category/get-categories")
    return data.data
  } catch (error) {
    console.error(error);
  }
})



export const DeleteProductById = createAsyncThunk("counter/DeleteProductById", async (id, {dispatch}) => {
  try {
    const { data } = await axiosRequest.delete(`/Product/delete-product?id=${id}`)
    dispatch(GetProduct())
    return data
  } catch (error) {
    console.error(error);
  }
})

export const GetColor = createAsyncThunk("counter/GetColor", async () => {
  try {
    const { data } = await axiosRequest.get("/Color/get-colors")
    return data
  } catch (error) {
    console.error(error);
  }
})

export const GetBrand = createAsyncThunk("counter/GetBrand", async () => {
  try {
    const { data } = await axiosRequest.get("/Brand/get-brands")
    return data
  } catch (error) {
    console.error(error);
  }
})

export const GetCategory = createAsyncThunk("counter/GetCategory", async () => {
  try {
    const { data } = await axiosRequest.get("/SubCategory/get-sub-category")
    return data
  } catch (error) {
    console.error(error);
  }
})

export const searchByName = createAsyncThunk("counter/searchByName", async (search) => {
  try {
    const { data } = await axiosRequest.get(`/Product/get-products?ProductName=${search?search:""}`)
    return data
  } catch (error) {
    console.error(error);
  }
})

export const postCategroy = createAsyncThunk('counter/postCategroy',async(brand, {dispatch}) => {
  const form = new FormData()
  form.append('CategoryImage', brand.categoryFile)
  form.append('CategoryName', brand.CategoryName )
try {
      const {data} = await axiosRequest.post(`/Category/add-category`, form)
      dispatch(GetByCategory())
      return data
  } catch (error) {
      console.error(error);
      
  }
})



export const deleteCategory = createAsyncThunk("counter/deleteCategory", async (id, { dispatch }) => {
  try {
      const { data } = await axiosRequest.delete(`/Category/delete-category?id=${id}`)
      dispatch(GetByCategory())
      return data
  } catch (error) {
    console.error(error);
    
  }
})
