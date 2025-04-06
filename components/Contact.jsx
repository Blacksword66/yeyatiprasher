'use client'
import { useState } from "react";
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b7af5210-3bf0-461b-b8d8-cda6b71430a4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contact' className="mb-20 mt-20 scroll-mt-20">
        <h1>Connect with me!</h1>
        <p className='text-gray-400 text-center mx-auto text-base md:text-lg max-w-2xl leading-relaxed mb-6"'>
            Reach out to me for any comments, feedback or projects. I'd love to hear from you!</p>


        <form onSubmit={onSubmit} className='max-w-2xl mx-auto items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                <input className='flex-1 p-3 outline-none border-[0.5px] border-green-400 rounded-md bg-gray-900' 
                type='text' placeholder='Enter your name' required name="name"></input>
                <input className='flex-1 p-3 outline-none border-[0.5px] border-green-400 rounded-md bg-gray-900' 
                type='email' placeholder='Enter your email' required name="email"></input>
            </div>
            <textarea className='w-full p-4 outline-none border-[0.5px] border-green-400 rounded-md bg-gray-900 mb-6'
            rows='6' placeholder='Enter your message' required name="message"></textarea>

            <div className='flex justify-center'>
                <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow-lg font-semibold 
                          text-lg hover:bg-green-700 transition duration-200 hover:shadow-green-500/40 shadow-green-500/30
                          flex flex-row justify-center items-center"
                type='submit'>Submit Now <FaArrowRight className='ml-2'/></button>
            </div>

            <p className="mt-4">{result}</p>
        </form>
    </div>
  )
}

export default Contact