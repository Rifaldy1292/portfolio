import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(formData);

    const whatsappNumber = "6289514636994";

    // Format pesan WhatsApp dari formData
    const message = `Halo, saya ${formData.name}. Email saya adalah ${formData.email}. Pesan saya: ${formData.message}`;

    // Encode pesan agar sesuai dengan URL
    const encodedMessage = encodeURIComponent(message);

    // Buat URL WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Arahkan pengguna ke URL WhatsApp
    window.open(whatsappUrl, "_blank");
    e.preventDefault();
    // Tambahkan logika pengiriman data form ke backend atau email
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="p-8 min-h-screen text-white">
      <motion.h1
        className="text-4xl text-center font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Formulir Kontak */}
        <motion.div
          className=" bg-gray-400 bg-opacity-20 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-500 bg-opacity-20 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Informasi Kontak */}
        <motion.div
          className=" bg-gray-400 bg-opacity-20 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="mb-4">
            <strong>Email:</strong> mochamadrifkyrifaldy@gmail.com
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +6 (28) 95-1463-6994
          </p>
          <p className="mb-4">
            <strong>Location:</strong> Sidoarjo, Indonesia
          </p>

          <div className="flex space-x-6 mt-8">
            <motion.a
              href="https://github.com/Rifaldy1292"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mochamad-rifky-rifaldy-a79177313/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://wa.me//6289514636994"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              Watsapp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
