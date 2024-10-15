import React from "react";
import Navigation from "../components/navigation";
import logo from "../assets/Group 4444.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../api/api";
import toast from "react-hot-toast";

const LogInAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogin(event) {
    event.preventDefault();
    const obj = {
      userName: event.target["name"].value,
      password: event.target["password"].value,
    };

    const resultAction = await dispatch(login(obj));
    if (login.fulfilled.match(resultAction)) {
      navigate("/");
    } 
    else {
      toast.error("The account does not exist.")
    }
  }

  return (
    <div className="w-[100%] flex">
      <div className="w-[55%] h-screen flex flex-col items-start justify-center p-[50px] bg-[#1C2536]">
        <h1 className="text-white text-[24px]">Welcome to admin panel</h1>
        <img className="w-[344px]" src={logo} alt="" />
      </div>
      <div className="w-[45%] h-screen flex flex-col items-center justify-center">
        <div className="w-[400px] flex flex-col gap-[20px]">
          <h1 className="text-[28px] font-[700]">Log in</h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-[10px]">
            <input
              className="w-[400px] h-[56px] border border-[lightgray] outline-none pl-[10px] pr-[10px] text-[18px] rounded-[10px]"
              placeholder="Email..."
              type="text"
              name="name"
              id=""
            />
            <input
              className="w-[400px] h-[56px] border border-[lightgray] outline-none pl-[10px] pr-[10px] text-[18px] rounded-[10px]"
              placeholder="Password..."
              type="password"
              name="password"
              id=""
            />
            <h1
              onClick={() => {
                navigate("/");
              }}
              className="w-[400px] flex justify-center items-center cursor-pointer text-[#2563EB] text-[16px] "
            >
              Forgot Password?
            </h1>
            <button type="submit" className="w-[400px] h-[56px] rounded bg-[#2563EB] text-white text-[16px]">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInAdmin;
