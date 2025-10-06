import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
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
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 max-w-md mx-auto mt-10">
          <h2 className="text-xl font-semibold">Formik Registration Form</h2>

          <div>
            <label>Username:</label>
            <Field name="username" className="border p-2 w-full rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" className="border p-2 w-full rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" className="border p-2 w-full rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
