import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>

<Toaster
  position="top-center"
  toastOptions={{
    style: {
      background: 'var(--color-bgthird)',  // Dark background for toast
      color: 'var(--color-textprimary)',   // Light text
      border: '1px solid var(--color-borderlight)',
      padding: '14px 18px',
      borderRadius: '10px',
      fontSize: '0.95rem',
    }
  }}
/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
