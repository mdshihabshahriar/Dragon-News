'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (data)=>{
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
    }

  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="text-xl text-center font-bold mb-6">Login your account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" {...register("email", { required: "Email field is required" })} className="input" placeholder="Enter your email" />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "Password field is required" })} className="input" placeholder="Enter your password" />
            <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
