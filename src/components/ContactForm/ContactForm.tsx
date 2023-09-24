"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [inputes, setInputes] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);
  const resetInputes = () => {
    setInputes({ name: "", email: "", subject: "", message: "" });
  };
  const onInputeChange = (e: any) => {
    let { name, value } = e.target;
    setInputes((preVal) => ({ ...preVal, [name]: value }));
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = inputes;

    if (!name || !email || !subject || !message)
      return toast.error("Please fill required field");
    setDisabled(true);
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inputes),
    });
    const ans = await response.json();
    if (response.status === 200) {
      toast.success(ans.message);
      setDisabled(false);
    } else {
      toast.error(ans.message);
      setDisabled(false);
    }

    resetInputes();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="z-10 mx-3 block h-auto rounded-lg border-[1px] border-solid border-[rgba(222,222,222,0.203)] border-opacity-10 bg-[#ffffff1c] p-6 backdrop-blur-[6px]  md:w-1/2">
        <div className="text-text1 mb-2 px-3 py-4 text-2xl font-extrabold leading-5 tracking-wider lg:text-lg">
          Email Me 🚀
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              id="name"
              name="name"
              value={inputes.name}
              onChange={onInputeChange}
              className="dark:bg-background1 block w-full rounded-lg border border-gray-300 bg-gray-700 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Your Name *"
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="dark:bg-background1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Your Email *"
              required
              name="email"
              value={inputes.email}
              onChange={onInputeChange}
              autoComplete="email"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              id="subject"
              className="dark:bg-background1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Subject "
              name="subject"
              value={inputes.subject}
              onChange={onInputeChange}
              autoComplete="subject"
            />
          </div>

          <div className="mb-6">
            <textarea
              id="message"
              rows={4}
              className="dark:bg-background1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Write your thoughts here *"
              required
              name="message"
              value={inputes.message}
              onChange={onInputeChange}
              autoComplete="message"
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={disabled}
            className="group  relative mb-2 mr-2 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-gray-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
          >
            <span className="relative w-full rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-800">
              send
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
