"use client";
import { React, useRef, useState } from "react";
import { poppins } from "../ui/fonts";
import NavLinks from "../ui/Navlinks";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { object, string } from "yup";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

export default function SignUp() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [yearOfStudy, setyearOfStudy] = useState("");
  const [track, setTrack] = useState("");
  //
  const sendEmail = async (e) => {
 
    // console.log(formData);

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

  // Form validation

  const studentSchema = object({
    name: string().required("*Must provide a name"),
    email: string().email("Please enter a valid email").required("*Email is required"),
    yearOfStudy: string().required("*Current year of study is required"),
    track: string()
      .required("*Track is required")
      .min(20, "Track must be a minimum of 20 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      yearOfStudy: "",
      track: "",
    },
    validationSchema: studentSchema,
    onSubmit: sendEmail,
  });


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
          ref={form}
            className="h-full  flex flex-col justify-evenly items-center"
            onSubmit={formik.handleSubmit}
          >
            <div
              className={`${poppins.className} text-white font-poppins text-3xl tracking-widest antialiased`}
            >
              Sign Up form
            </div>
            <div>
              <input
                type="text"
                onChange={formik.handleChange}
                placeholder="Full Name"
                className={`${poppins.className} input-text antialiased ${formik.errors.email?'border-red-500':''}`}
                value={formik.values.name}
                name="name"
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name && (
                <p className={"text-[10px] mt-[10px] text-[red]"}>
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={`${poppins.className} input-text antialiased ${formik.errors.email?'border-red-500':''} `}
                name="email"
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email &&(
                <p className={"text-[10px] mt-[10px] text-[red]"}>
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Year of Study"
                value={formik.values.yearOfStudy}
                onChange={formik.handleChange}
                className={`${poppins.className} input-text antialiased ${formik.errors.email?'border-red-500':""}`}
                name="yearOfStudy"
                onBlur={formik.handleBlur}
              />
              {formik.errors.yearOfStudy && formik.touched.yearOfStudy && (
                <p className={"text-[10px] mt-[10px] text-[red]"}>
                  {formik.errors.yearOfStudy}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                value={formik.values.track}
                onChange={formik.handleChange}
                placeholder="Tech Track"
                className={`${poppins.className} input-text antialiased ${formik.errors.email?'border-red-500':''}`}
                name="track"
                onBlur={formik.handleBlur}
              />
              {formik.errors.track && formik.touched.track && (
                <p className={"text-[10px] mt-[10px] text-[red]"}>
                  {formik.errors.track}
                </p>
              )}
            </div>

            <button
              className={`${poppins.className} antialiased cursor-pointer  rounded-full px-5 md:w-[30%] h-[10%] py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
