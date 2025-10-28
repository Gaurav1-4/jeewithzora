import React, { useState } from "react";

export default function PlansGrid() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwkWxtGJMGC4PQZuYHdVXcfPRmrE_x20TNpEKahCxqdv3zmZ9HTqA0d64ofYn-cqI4C/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });
      setSubmitted(true);
      setFormData({ name: "", phone: "" });
      window.location.href = "/thank-you";
    } catch (error) {
      alert("Error! Please try again.");
    }
  };

  return (
    <div className="text-center py-12">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">
        🎓 Zora Exclusive Batch
      </h2>

      <p className="text-lg text-gray-700 mb-8">
        Mentorship by{" "}
        <span className="font-semibold text-blue-800">
          99 percentile JEE mentors
        </span>
        . <br />
        One premium batch worth{" "}
        <span className="line-through text-red-500">₹999</span> —{" "}
        <span className="text-green-600 font-bold">
          FREE for our website’s birthday!
        </span>
      </p>

      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all"
      >
        Join Free Batch 🎉
      </button>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-80 shadow-lg relative">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-3">
                  🎉 Thank You!
                </h2>
                <p className="text-gray-700">
                  You’ve successfully joined the batch.
                </p>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setSubmitted(false);
                  }}
                  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold text-blue-700 mb-4">
                  Join Free Batch
                </h2>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mb-3 p-2 border rounded-md"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full mb-3 p-2 border rounded-md"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-md w-full font-semibold hover:bg-green-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mt-3 text-gray-600 underline text-sm"
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}