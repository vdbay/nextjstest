"use client"

import LoginForm from "./component/LoginForm"



export default function LoginPage() {
  return (
    <div className="flex h-screen bg-white items-center justify-center gap-4 p-4">
      {/* Login Form Section */}
      <LoginForm />

      {/* Image Section */}
      <div className="hidden md:flex w-full md:w-1/2 h-full bg-black flex-col items-center justify-center rounded-3xl shadow-lg p-4 md:p-8 text-white">
        <img
          src="https://img.freepik.com/premium-vector/elegant-cosmetic-face-crem-jar-skin-care-black-background-beautiful-cosmetic-template-ads-makeup-products-brand-realistic-3d-black-matte-cosmetic-jar_195742-203.jpg"
          alt="Cosmetic Product"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  )
}

