import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
        🎉 Thank You for Joining!
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Your registration has been received successfully.  
        Our team will contact you soon with further details.  
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}