import React, { useContext, useState } from "react";
import axios from "axios";
import data from "../ContextApi";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setUserData } = useContext(data);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/user/login", user).then((res) => {
      console.log("login post request", res.data);
      alert(res.data.message);
      setUserData(res.data.user);
      navigate("/");
    });
  };

  // console.log(user)

  return (
    <div className="flex justify-center items-center mt-24  w-full">
      <form className="flex flex-col gap-5 w-1/3 border-2 border-black rounded-2xl p-10">
        <label htmlFor="email">Email Id</label>
        <input
          className="hover:bg-slate-200 rounded-sm"
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          className="hover:bg-slate-200 rounded-sm"
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <div className="btn-container">
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>
          <button className="btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
