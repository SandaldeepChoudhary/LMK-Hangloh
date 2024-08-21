"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from "./Form";
import { ToastContainer } from "react-toastify";

const PopUpForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = () => {
    // Close the dialog when the form is submitted
    setIsOpen(false);
  };
  return (
    <>
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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="relative">
          <DialogTrigger asChild className="relative">
            <button className="w-40 h-14 grid place-items-center rounded-full border-black bg-white border-2 z-10 text-sm font-bold hover:bg-primary hover:text-white transition duration-500 relative ease-in-out dark:text-black dark:hover:text-white">
              CONTACT US
            </button>
          </DialogTrigger>
          <div className="w-40 h-14 absolute bg-gray-300 rounded-full z-0 top-2 -right-2"></div>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Us!</DialogTitle>
            <DialogDescription>
              Please fill out your details. So that we can reach out to you.
            </DialogDescription>
          </DialogHeader>
          <div className="grid place-items-center py-4">
            <Form onSubmit={handleFormSubmit} className="w-[250px]" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopUpForm;
