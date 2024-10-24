import React, { useState } from "react";
import SubscribeNewsletterimg from "../images/SubscribeNewsletter.jpg";
import axios from "axios";

function SubscribeNewsletter({ handleClose }) {
  const [formData, setFormData] = useState({
    email: "",
    topics: {
      bankruptcy: false,
      intellectualProperty: false,
      internationalDispute: false,
      others: false,
    },
  });

  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        topics: {
          ...prevFormData.topics,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    try {
      // Send form data to the backend
      await axios.post("http://localhost:3001/sendSubscribeEmail", formData);

      // Send welcome email to the user
      await axios.post("http://localhost:3001/sendWelcomeEmail", {
        email: formData.email,
        topics: formData.topics,
      });

      // Update submission message
      setSubmissionMessage("Thanks for subscribing  NewsLetter!");
    } catch (error) {
      console.error("Error sending email:", error.message);
      alert("Failed to send email: " + error.response.data);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/2 p-10 flex justify-center items-center">
          <img
            src={SubscribeNewsletterimg}
            className="w-full h-auto rounded-md"
            alt="Subscribe to Newsletter"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          {submissionMessage && (
            <p className="text-green-500 mb-4">{submissionMessage}</p>
          )}
          <button
            onClick={handleClose}
            className="self-end text-red-500 hover:text-red-600 focus:outline-none mb-4"
          >
            <span className="text-black">×</span>
          </button>
          <h2 className="text-2xl font-bold mb-4">SUBSCRIBE TO NEWSLETTER</h2>
          <form
            onSubmit={handleSendMessage}
            className="flex flex-col space-y-4"
          >
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md"
                onChange={handleInputChange}
                value={formData.email}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Pick Your Interests*
              </label>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="bankruptcy"
                    checked={formData.topics.bankruptcy}
                    onChange={handleInputChange}
                    className="mr-2"
                  />{" "}
                  Bankruptcy Restructuring & Insolvency
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="intellectualProperty"
                    checked={formData.topics.intellectualProperty}
                    onChange={handleInputChange}
                    className="mr-2"
                  />{" "}
                  Intellectual Property
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="internationalDispute"
                    checked={formData.topics.internationalDispute}
                    onChange={handleInputChange}
                    className="mr-2"
                  />{" "}
                  International Dispute
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="others"
                    checked={formData.topics.others}
                    onChange={handleInputChange}
                    className="mr-2"
                  />{" "}
                  Others
                </label>
              </div>
              <br></br>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubscribeNewsletter;
