import { useFormik } from "formik";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ErrorMessage,
  InputPlain,
  SpinnerSmall,
  Text2Xl,
} from "../../components/commons";
import { RoutePaths } from "../../config/routes";
import { authContext } from "../../context/auth";
import { login } from "../../functions/auth";
import { LoginFormSchema } from "../../yupSchemas";

const Login = () => {
  document.title = "Chatty - Login";

  const { setUser, user } = useContext(authContext);

  /**
   * State For Loading
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  /**
   * @function onSubmit
   *
   * Triggers When Login Form Submits
   *
   * Call The API To Login User
   */
  const onSubmit = async (values) => {
    /**
     * Start Loading
     */
    setIsLoading(true);
    const response = await login(values);

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

    localStorage.setItem("chatty-user", response.token);
    navigate(RoutePaths.index);
    setUser(response.token);
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      validationSchema: LoginFormSchema,
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
  ];

  useEffect(() => {
    /**
     * Protected Route
     */
    if (user || localStorage.getItem("chatty-user")) {
      navigate(RoutePaths.index);
      return;
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
                text="Login To App"
                classes="leading-tight tracking-tight font-bold !text-gray-900 dark:!text-white"
              />
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {FormField.map((field) => {
                  return <InputPlain key={field.name} {...field} />;
                })}

                <button
                  type={isLoading ? "button" : "submit"}
                  className="w-full text-white h-12 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  {isLoading ? <SpinnerSmall /> : <span>Login</span>}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't Have An Account?{" "}
                  <Link
                    to={RoutePaths.signup}
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
                  >
                    Signup here
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

export default Login;
