import React from "react";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErrorMessage = () => (
  <div className="text-center py-24 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl shadow-xl">
    <Package className="mx-auto h-32 w-32 text-red-500 mb-8 animate-bounce" />
    <h1 className="text-5xl font-bold mb-8 text-red-600">
      Oops! Something went wrong
    </h1>
    <p className="text-2xl text-gray-700 mb-12 max-w-xl mx-auto">
      We're having trouble loading the products. Please try again later or
      contact our support team.
    </p>
    <Button
      variant="outline"
      className="bg-white hover:bg-red-100 text-red-60      border-red-300 px-10 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
    >
      <Package className="mr-3 h-7 w-7" />
      Try Again
    </Button>
  </div>
);

export default ErrorMessage;
0;