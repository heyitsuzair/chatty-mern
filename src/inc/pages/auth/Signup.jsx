import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ErrorMessage,
  InputPlain,
  SpinnerSmall,
  SuccessMessage,
  Text2Xl,
} from "../../components/commons";
import { RoutePaths } from "../../config/routes";
import { signup } from "../../functions/auth";
import { RegisterFormSchema } from "../../yupSchemas";

const Signup = () => {
  document.title = "Chatty - Signup";

  const navigate = useNavigate();

  /**
   * State to show loading
   */
  const [isLoading, setIsLoading] = useState(false);

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
  const onSubmit = async (values) => {
    /**
     * Start Loading
     */
    setIsLoading(true);
    const response = await signup(values);

    /**
     * If There Is Any Error Show Error In Toast
     *
     * Stops Loading
     *
     * return the code
     */
    if (response.error) {
      ErrorMessage(response.msg);
      setIsLoading(false);
      return;
    }

    SuccessMessage(response.msg);
    navigate(RoutePaths.login);
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

  useEffect(() => {
    const user = localStorage.getItem("chatty-user");
    /**
     * Protected Route
     */
    if (user) {
      navigate(RoutePaths.index);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Text2Xl
                text="Create An Account"
                classes="leading-tight tracking-tight font-bold !text-gray-900 dark:!text-white"
              />
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {FormField.map((field) => {
                  return <InputPlain key={field.name} {...field} />;
                })}

                <button
                  type="submit"
                  className="w-full text-white h-12 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  {isLoading ? <SpinnerSmall /> : <span>Signup</span>}
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
