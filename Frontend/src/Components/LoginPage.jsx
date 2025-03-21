import { useState } from "react";
import img from "../assets/loginlogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToHome = async () => {
    try {
      const response = await axios.post("https://flipkart-r9ck.onrender.com/logindata", {
        email,
        password,
      });

      if (response.status === 201) {
        const { token, email, id } = response.data.Loggeduser;

        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("id", id);
        alert("Login Successful");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        console.error("Login Error:", error);
        alert(error.response.data.message);
      } else {
        alert("Network Error. Please try again.");
      }
    }
  };

  const goToSignUp = () => {
    navigate('/register')
  }

  const forgotPassword = () => {
    navigate('/forgot')
  }

  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row p-5 gap-3 justify-center">
        <div className="bg-blue-500 p-5 w-full sm:w-1/2">
          <p className="text-4xl pt-5 font-semibold">Login</p>
          <p className="text-black-300 pt-3">
            Get access to your Orders, <br /> Wishlist and Recommendations.
          </p>
          <img src={img} alt="Login" className="pt-10 pb-2 mx-auto" />
        </div>
        <div className="bg-gray-200 p-3 w-full sm:w-1/2">
          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 m-2 p-1 focus-visible:outline-none focus:ring-0 cursor-pointer"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 m-2 p-1 focus-visible:outline-none focus:ring-0 cursor-pointer"
            />
            <a href="#" className="text-sm font-semibold ml-auto" onClick={forgotPassword}>
              Forgot Password?
            </a>
            <button
              className="bg-orange-400 p-2 w-full font-semibold mt-2"
              onClick={goToHome}
            >
              Login
            </button>
            <button
              className="bg-white p-2 w-full font-semibold mt-2 border-b-2"
              onClick={goToSignUp}
            >
              New User? Sign Up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
