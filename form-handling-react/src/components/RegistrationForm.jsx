import React, { useState } from "react";

const RegistrationForm = () => {
  // State for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    try {
      // Mock API call
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      console.log("User registered:", data);
      alert("Registration successful!");

      // Reset fields
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Error:", err);
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
          type="text"
          name="username"
          value={username}          // ✅ controlled input
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}             // ✅ controlled input
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}          // ✅ controlled input
          onChange={(e) => setPassword(e.target.value)}
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
