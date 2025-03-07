import Footer from "./Footer"
import Header from "./Header"

const Success = () => {
  return (
    <>
    <Header />
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <p className="text-2xl text-blue-700 font-bold text-center max-w-md">
        Successfully Payment Done! Your item will be received within 4 days.
      </p>
    </div>
    <Footer />
    </>
  )
}

export default Success
