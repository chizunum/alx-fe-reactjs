import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      // Simulate API call using JSONPlaceholder
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to register user");

      const data = await response.json();
      console.log("User registered:", data);
      alert("Registration successful!");

      // Reset form
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      console.error("Error:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-sm"
    >
      <h2 className="text-xl font-semibold text-center mb-2">
        Controlled Registration Form
      </h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div>
        <label className="block font-medium mb-1">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username} // ✅ controlled input
          onChange={handleChange}
          placeholder="Enter username"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email} // ✅ controlled input
          onChange={handleChange}
          placeholder="Enter email"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password} // ✅ controlled input
          onChange={handleChange}
          placeholder="Enter password"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-2 rounded text-white transition ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegistrationForm;
