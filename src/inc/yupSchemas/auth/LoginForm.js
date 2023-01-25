import * as Yup from "yup";

export const LoginFormSchema = Yup.object({
  username: Yup.string().required("Please Enter Username"),
  password: Yup.string().required("Please Enter Password"),
});
