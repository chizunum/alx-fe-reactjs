import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation Schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required!"),
  email: Yup.string().email("Invalid email address!").required("Email is required!"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required!"),
});

const FormikForm = () => {
  // ✅ Initial values for the form
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // ✅ Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("User registered:", data);
      alert("Registration successful!");

      resetForm();
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label>Username:</label>
              <Field
                type="text"
                name="username"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label>Email:</label>
              <Field
                type="email"
                name="email"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label>Password:</label>
              <Field
                type="password"
                name="password"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
