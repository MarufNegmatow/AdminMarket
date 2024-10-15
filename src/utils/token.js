import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function deleteToken()
{
  localStorage.removeItem("token");
  toast.error("You have logged out of your account.")
}

export function getToken()
{
  try{
    return jwtDecode(localStorage.getItem("token"))
  }
  catch(error)
  {
    console.log(error);
  }
}

export const axiosRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});


