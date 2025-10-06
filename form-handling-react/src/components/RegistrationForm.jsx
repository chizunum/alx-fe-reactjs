import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

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

    try {
      // Mock API endpoint simulation
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("User registered:", data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold">Controlled Registration Form</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div>
        <label>Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
