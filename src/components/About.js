import React from "react";
import { UserClass } from "./UserClass";

export const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          About Our Food Delivery App
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Welcome to our revolutionary food delivery service! We pride ourselves
          on delivering the best meals from the top restaurants in your area
          right to your doorstep. Whether you're craving a spicy Indian curry, a
          savory Italian pasta, or a classic American burger, we've got you
          covered. Our mission is to make dining easy, fast, and enjoyable, so
          you can spend more time doing what you love.
        </p>

        <div className="flex justify-center mb-8">
          <blockquote className="bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-4 italic text-lg rounded-lg">
            "Good food is the foundation of genuine happiness." – Auguste
            Escoffier
          </blockquote>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Meet Our User
          </h2>
          <UserClass name={"Prem Anand"} location={"New Delhi-85"} age={"25"} />
        </div>
      </div>
    </div>
  );
};
