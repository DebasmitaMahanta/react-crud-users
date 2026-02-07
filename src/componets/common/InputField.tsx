import type {
  UseFormRegister,
  FieldError,
  RegisterOptions,
} from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: any;
  type: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  error?: FieldError;
}

export default function InputField({
  label,
  name,
  type,
  placeholder,
  register,
  rules,
  error,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`border rounded-lg px-3 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && (
        <span className="text-red-500 text-xs">
          {error.message}
        </span>
      )}
    </div>
  );
}
