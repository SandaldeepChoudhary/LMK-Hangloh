import { ToastContainer } from "react-toastify"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-lg dark:bg-accent">
    <div className="container mx-auto">
        <Navbar/>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    </header>
  )
}
