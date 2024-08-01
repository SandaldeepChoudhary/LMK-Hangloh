import { ToastContainer } from "react-toastify"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-opacity-60 shadow-lg dark:bg-accent" style={{
      backdropFilter: 'blur(10px)',
    }}>
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
