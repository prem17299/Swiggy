import React from "react";

export const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-6 my-8 bg-white shadow-lg rounded-lg">
      <h1 className="font-bold text-3xl mb-6 text-center text-blue-600">
        Contact Us
      </h1>
      <form className="flex flex-col space-y-4">
        <input
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Your Name"
        />
        <textarea
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          placeholder="Your Message"
          rows="5"
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
