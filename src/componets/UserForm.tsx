import { useForm } from "react-hook-form";
import { createUser } from "../api/userApi";
import type { User } from "../types/user";
import { userFormConfig } from "../config/userFormConfig";
import InputField from "./common/InputField";
import toast from "react-hot-toast";

interface UserFormProps {
  onSuccess: () => void;
  onCancel?: () => void;
  defaultValues?: User;
  onSubmit?: (data: User) => Promise<void>;
}

const UserForm: React.FC<UserFormProps> = ({
  onSuccess,
  onCancel,
  defaultValues,
  onSubmit: customSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<User>({ defaultValues });

  const onSubmitHandler = async (data: User) => {
    const toastId = toast.loading("Saving user...");

    try {
      if (customSubmit) {
        await customSubmit(data);
        toast.success("User updated successfully", { id: toastId });
      } else {
        await createUser(data);
        toast.success("User created successfully", { id: toastId });
      }

      reset();
      onSuccess();
    } catch (error) {
      toast.error("Failed to save user", { id: toastId });
    }
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {userFormConfig.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            register={register}
            rules={{
              required: field.required
                ? `${field.label} is required`
                : false,
            }}
            error={errors[field.name]}
          />
        ))}

        
        <div className="col-span-full flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => {
              reset();
              onCancel?.();
            }}
            disabled={isSubmitting}
            className="px-4 py-2 border rounded-lg text-gray-700 
                       hover:bg-gray-100 cursor-pointer
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 cursor-pointer
                       disabled:opacity-60 disabled:cursor-not-allowed
                       flex items-center gap-2"
          >
            {isSubmitting && (
              <span className="h-4 w-4 border-2 border-white border-t-transparent 
                               rounded-full animate-spin" />
            )}
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
