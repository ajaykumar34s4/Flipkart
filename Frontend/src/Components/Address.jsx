import { useState } from "react";
import img from "../assets/flipkart logo.png";
import { useNavigate } from "react-router-dom";

const Address = () => {

    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [phoneno,setPhoneno] = useState("");
    const [pincode,setPincode] = useState("");
    const [locality,setLocality] = useState("");
    const [addres,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [landmark,setLandmark] = useState("");

    const addAddress = async () => {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");

      if(!token) {
        alert("Please login to add your address");
        return;
      }

      const newAddress = {
        id:id,
        name:name,
        phoneno:phoneno,
        pincode:pincode,
        locality:locality,
        address:addres,
        city:city,
        landmark:landmark,
      };

      try{
        const response = await fetch("http://localhost:3000/addresspost", {
          method : "POST",
          headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(newAddress),
        });

        const data = await response.json();
        console.log("Response from server:", data);
        if (data.message.includes("successfully")) {
          alert(data.message);
        }
      }catch(error){
        console.log("Error Adding Address : ",error);
      }
    };

    const goToHome = () => {
      navigate("/");
    }

  return (
    <>
      <div className="bg-blue-500 p-4 flex justify-center md:justify-start">
        <img src={img} alt="Flipkart Logo" className="w-20 cursor-pointer" onClick={goToHome}/>
      </div>

      <div className="flex flex-col md:flex-row justify-center p-6">
        <div className="bg-blue-500 p-6 w-full md:w-[30%] text-white text-center rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">Fill Your Details</h1>
          <p className="text-sm mt-1">To Get Your Items Delivered</p>
        </div>

        <div className="grid grid-cols-1 p-6 gap-4 w-full md:w-[30%] bg-gray-100 shadow-md rounded-lg">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-md focus:outline-blue-500" onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder="Mobile Number" className="w-full p-3 border rounded-md focus:outline-blue-500" onChange={(e)=>setPhoneno(e.target.value)} />
          <input type="text" placeholder="Pincode" className="w-full p-3 border rounded-md focus:outline-blue-500" onChange={(e)=>setPincode(e.target.value)} />
          <input type="text" placeholder="Locality" className="w-full p-3 border rounded-md focus:outline-blue-500" onChange={(e)=>setLocality(e.target.value)} />
          <textarea placeholder="Address" className="w-full p-3 border rounded-md focus:outline-blue-500 resize-none" rows="3" onChange={(e)=>setAddress(e.target.value)}></textarea>
          <input type="text" placeholder="City/State/Town" className="w-full p-3 border rounded-md focus:outline-blue-500" onChange={(e)=>setCity(e.target.value)} />
          <input type="text" placeholder="Landmark (Optional)" className="w-full p-3 border rounded-md focus:outline-blue-500" onChange={(e)=>setLandmark(e.target.value)} />
          <button className="bg-orange-500 text-white p-3 font-semibold rounded-md hover:bg-orange-600 transition-all duration-300" onClick={addAddress}>Add Address</button>
        </div>
      </div>

      <div className="flex flex-wrap text-white bg-black text-sm justify-center gap-5 p-5">
        <a href="" className="flex items-center gap-2">Become a Seller</a>
        <a href="" className="flex items-center gap-2">Advertise</a>
        <a href="" className="flex items-center gap-2">Gift Cards</a>
        <a href="" className="flex items-center gap-2">Help Center</a>
        <h6 className="text-white">&copy; 2007-2025 Flipkart.com</h6>
      </div>
    </>
  );
};

export default Address;
