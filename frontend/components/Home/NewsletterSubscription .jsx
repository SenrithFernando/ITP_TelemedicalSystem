import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail(""); // Clear input after submission
  };

  return (
    <div className="max-w-3xl mx-auto text-center py-12 px-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">
        Subscribe To Our Newsletter
      </h2>
      <p className="text-gray-500 mt-2">Get the latest news from our hospital</p>

      {/* Subscription Box */}
      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <label className="text-gray-700 font-medium w-full sm:w-auto">
            Newsletter
          </label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:flex-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;