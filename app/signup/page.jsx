"use client";
import { React, useRef, useState } from "react";
import { poppins } from "../ui/fonts";
import NavLinks from "../ui/Navlinks";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [yearOfStudy, setyearOfStudy] = useState("");
  const [track, setTrack] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zono3b6",
        "template_4jbk3fl",
        form.current,
        "CpuitAMc1whVN5PCK"
      )
      .then(
        (result) => {
          toast.success("Signed Up ☑️", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          // show the user an error
          toast.error("Not signedup  ❌", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
    setTimeout(() => {
      setName("");
      setEmail("");
      setyearOfStudy("");
      setTrack("");
    }, 3000);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="App  bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
        <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
        <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>

        <div className="container  h-[80%] md:w-[55%] bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form
            className="h-full  flex flex-col justify-evenly items-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <div
              className={`${poppins.className} text-white font-poppins text-3xl tracking-widest antialiased`}
            >
              Sign Up form
            </div>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className={`${poppins.className} input-text antialiased `}
              name="user_name"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`${poppins.className} input-text antialiased `}
              name="user_email"
            />
            <input
              type="text"
              placeholder="Year of Study"
              value={yearOfStudy}
              required
              onChange={(e) => setyearOfStudy(e.target.value)}
              className={`${poppins.className} input-text antialiased `}
              name="year_study"
            />
            <input
              type="text"
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              placeholder="Tech Track"
              className={`${poppins.className} input-text antialiased `}
              name="techtrack"
            />
            {/* <input type="Submit" /> */}
            <button
              className={`${poppins.className} antialiased cursor-pointer  rounded-full px-5 md:w-[30%] h-[10%] py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80`}
              onClick={sendEmail}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
