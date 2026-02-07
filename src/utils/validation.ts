import * as yup from "yup";

export const userValidationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
});
