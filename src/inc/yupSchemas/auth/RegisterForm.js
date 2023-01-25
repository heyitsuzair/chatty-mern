import * as Yup from "yup";

export const RegisterFormSchema = Yup.object({
  username: Yup.string().required("Please Enter Username"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
  password: Yup.string()
    .min(5, "Password Must Be Of Minimum 5 Characters")
    .required("Please Enter Password"),
  confirm_password: Yup.string()
    .required("Please Enter Confirm Password")
    .oneOf([Yup.ref("password")], "Passwords Doesn't Match!"),
});
