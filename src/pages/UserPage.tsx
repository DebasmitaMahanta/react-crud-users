import UserForm from "../componets/UserForm";
import { createUser } from "../api/userApi";
import type { User } from "../types/user";

export default function UserCreatePage() {
  const handleCreateUser = async (data: User) => {
    await createUser(data);
  };

  return (
    <section className="max-w-3xl mx-auto py-6">

      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Create User</h1>
        <p className="text-gray-600 mt-1">
          Fill in the details below to add a new user.
        </p>
      </header>


      <UserForm
        onSubmit={handleCreateUser}
        onSuccess={() => {

          console.log("User created successfully");
        }}
      />
    </section>
  );
}
