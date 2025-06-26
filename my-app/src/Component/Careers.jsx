import React from 'react';

const Careers = () => {
  return (
    <div className="w-full max-w-md h-auto border border-gray-400 mx-auto my-16 bg-gray-100 rounded p-6">
      <h2 className="font-roboto text-xl mb-2">GET IN TOUCH</h2>
      <h3 className="font-roboto text-sm mb-4">SEND US YOUR RESUME HERE</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full rounded"
        />
        <input
          type="email"
          placeholder="Your Email abc@gmail.com"
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          placeholder="Your Phone Number"
          className="border p-2 w-full rounded"
        />
        <textarea
          placeholder="Your message (optional)"
          className="border p-2 w-full h-24 rounded resize-none"
        ></textarea>
        <div>
          <h3 className="font-roboto text-lg mb-2">Upload Your Resume Here</h3>
          <input type="file" className="border p-2 w-full rounded" />
        </div>
        <button
          type="submit"
          className="bg-black text-white text-lg px-6 py-2 rounded w-full hover:bg-gray-800 transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Careers;
