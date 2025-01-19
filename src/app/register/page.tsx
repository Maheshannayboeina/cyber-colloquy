import React from "react";
import RegisterForm from "./register";

const RegisterPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Register for Events</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;