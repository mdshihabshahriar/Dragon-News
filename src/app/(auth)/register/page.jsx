'use client';
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleRegisterFunc = (data)=>{
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);
        const {name, photoUrl, email, password} = data;
        console.log(data);
    }

  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="text-xl text-center font-bold mb-6">Register your account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input type="text" {...register("name", { required: "Name field is required" })} className="input" placeholder="Enter your name" />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input type="text" {...register("photoUrl", { required: "Photo URL field is required" })} className="input" placeholder="Enter your photo url" />
            {errors.photoUrl && <span className="text-red-500">{errors.photoUrl.message}</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" {...register("email", { required: "Email field is required" })} className="input" placeholder="Enter your email" />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" {...register("password", { required: "Password field is required" })} className="input" placeholder="Enter your password" />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
