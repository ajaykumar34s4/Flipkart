import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";

const Subcategory = () => {
  const location = useLocation();
  const item = location.state;
  
  const [count, setcount] = useState(1);

  const handleIncrement = () => {
    if (count >= 0 && count < 10) {
      setcount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0 && count <= 10) {
      setcount(count - 1);
    }
  };

  const addToCart = async () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    if (!token) {
      alert("Please log in to add items to the cart.");
      return;
    }

    if (count === 0) return;

    const cartItem = {
      id: id,
      title: item.title,
      price: item.price,
      quantity: count,
      image: item.image,
    };

    try {
      const response = await fetch("http://localhost:3000/cartpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cartItem),
      });

      const data = await response.json();
      console.log("Response from server:", data);

      if (data.message.includes("successfully")) {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 min-h-screen">
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-contain p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-8 lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
              {item.title} - {item.description} ({item.sub_category})
            </h1>

            <div className="flex items-center gap-2 font-semibold text-lg mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < item.rating.rate ? "#fbbf24" : "#e5e7eb"}
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 17.1l3.7 2.4-1-4.5 3.5-3.2-4.7-.4L12 6.1 9.5 11.9l-4.7.4 3.5 3.2-1 4.5L12 17.1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <h4 className="font-semibold">{item.rating.rate} ⭐</h4>
              <h4>({item.rating.count} Ratings)</h4>
            </div>

            <p className="text-xl text-gray-700 mb-4">
              Price: <span className="font-bold text-xl text-blue-600">&#8377;{item.price}</span>
            </p>

            <div className="flex gap-2 mt-5 p-2 bg-black text-white items-center justify-center rounded-lg w-[50%]">
              <h2 onClick={handleDecrement} className="cursor-pointer font-bold text-xl">
                -
              </h2>
              <h2 className="text-xl font-bold">{count}</h2>
              <h2 onClick={handleIncrement} className="cursor-pointer font-bold text-xl">
                +
              </h2>
            </div>

            <div className="flex justify-center mt-5">
              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-105"
                onClick={() => count > 0 && addToCart()}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subcategory;
