import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Login() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" flex justify-between items-center my-auto w-full">
        <div className=" w-1/2 flex justify-center">
          <Image src={logo} />
        </div>
        <div className=" w-1/2 flex flex-col items-center border-l border-gray py-24">
          <div>
            <div className=" text-center">
              <h2 className=" text-4xl">Welcome</h2>
              <p className=" text-sm mt-3">PLEASE LOGIN TO ADMIN DASHBOARD</p>
            </div>
            <form className=" mt-10 w-[350px]">
              <div>
                <input
                  type="text"
                  placeholder="USERNAME"
                  name="username"
                  className=" w-full p-2 mb-4 rounded-md text-bgColor outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="PASSWORD"
                  name="password"
                  className=" w-full p-2 mb-4 rounded-md"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" w-full py-3 mt-16 bg-primary rounded-md text-bgColor outline-none"
                >
                  LOGIN
                </button>
              </div>
              <div className=" text-center mt-3">
                <Link className=" text-xs" href={"/"}>
                  FORGOT PASSWORD?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
