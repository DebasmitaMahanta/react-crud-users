import type { User } from "../types/user";

export const userFormConfig: {
  name: keyof User;
  label: string;
  type: string;
  required?: boolean;
  pattern?: any;
}[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email",
    },
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
  },
];
