import Link from "next/link";
import React from "react";
import RightSection from "../right-section/page";
// import RightSection from "./right-section";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center lg:min-h-screen  ">
        {/* <iframe style={{width:"100vw", height:"100vh"}} src="http://54.144.29.48:3000/create/asst_jQ85u4RIE6j4PPjLXwiAvgTo"/> */}

        <div className="md:px-[50px] w-full mx-auto">
          <div className="relative flex flex-col 2xl:gap-x-20 xl:gap-x-10 gap-x-7 min-h-screen justify-center lg:shadow-none  items-center lg:flex-row space-y-8 md:space-y-0 w-[100%] px-[10px]bg-white lg:px-[40px] py-[20px] md:py-[40px] ">
            <div className="w-[100%] lg:w-[60%] xl:w-[50%]">
              <form action="" className="">
                <div className="flex flex-col gap-4 justify-center p-8 lg:p-14 md:max-w-[80%] lg:w-full lg:max-w-[100%] mx-auto ">
                  <div className="text-left ">
                    <p className="mb-2 2xl:text-[40px] md:text-[35px] text-[30px] leading-[38px] font-bold">
                      Welcome Admin
                    </p>
                    <p className="2xl:text-[18px] md:text-[16px] text-[15px] font-[400] leading-[26px] text-gray-400 mb-4 text-[#494949]">
                      Welcome back! Please enter your details
                    </p>
                  </div>
                  <div className="md:py-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="login-input w-full mt-2 custom-input"
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      title="enter valid email ex. abc@gmail.com"
                      // required
                    />
                  </div>
                  <div className="">
                    <input
                      name="password"
                      placeholder="Password"
                      className="login-input w-full mt-2 custom-input"
                      minLength={8}
                      // required
                    />
                    <div className="flex items-center mt-4 px-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id="showPassword"
                        className="mr-2"
                      />
                      <label
                        htmlFor="showPassword"
                        className="login-input-label"
                      >
                        Show Password
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                  <Link href="/admin/admin-dashboard">
                  <button
                      type="submit"
                      className="w-full bg-[#1f2432] font-medium text-white p-2 rounded-lg  hover:bg-white hover:border hover:border-gray-300 h-[50px] login-btn"
                    >
                      Login
                    </button>
                  </Link>

                    <div className="text-[16px] font-medium underline text-center py-3 cursor-password">
                      Forgot password
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <RightSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
