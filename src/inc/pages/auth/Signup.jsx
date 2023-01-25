import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { InputPlain } from "../../components/commons";
import { RoutePaths } from "../../config/routes";
import { RegisterFormSchema } from "../../yupSchemas";

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  /**
   * @function onSubmit
   *
   * Triggers When Register Form Submit
   *
   * Call The API To Register User
   */
  const onSubmit = () => {
    alert("Register Form Submit");
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      validationSchema: RegisterFormSchema,
      initialValues,
      onSubmit,
    });

  /**
   * Form Fields
   */
  const FormField = [
    {
      name: "username",
      id: "username",
      placeholder: "codewith_uzair",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.username,
      label: "Username",
      error: errors.username && touched.username,
      errorText: errors.username,
    },
    {
      name: "email",
      id: "email",
      placeholder: "example@company.com",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.email,
      label: "Email Address",
      error: errors.email && touched.email,
      errorText: errors.email,
      type: "email",
    },
    {
      name: "password",
      id: "password",
      placeholder: "••••••••",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.password,
      label: "Password",
      error: errors.password && touched.password,
      errorText: errors.password,
      type: "password",
    },
    {
      name: "confirm_password",
      id: "confirm_password",
      placeholder: "••••••••",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.confirm_password,
      label: "Confirm Password",
      error: errors.confirm_password && touched.confirm_password,
      errorText: errors.confirm_password,
      type: "password",
    },
  ];

  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {FormField.map((field) => {
                  return <InputPlain key={field.name} {...field} />;
                })}

                <button
                  type="submit"
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={RoutePaths.login}
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
