import { useState } from "react";
import type { User } from "../../types/user";
import UserForm from "../UserForm";
import { deleteUser, updateUser } from "../../api/userApi";
import Modal from "../common/Modal";

type Props = {
  users: User[];
  refresh: () => void;
};

export default function UserList({ users, refresh }: Props) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const shouldScroll = users.length >= 8;

  const handleDelete = async () => {
    if (!deleteId) return;
    setLoading(true);
    await deleteUser(deleteId);
    setLoading(false);
    setDeleteId(null);
    refresh();
  };

  const handleEdit = async (data: User) => {
    if (!editUser) return;
    setLoading(true);
    await updateUser(editUser.id!, data);
    setLoading(false);
    setEditUser(null);
    refresh();
  };

  if (!users.length) {
    return (
      <div className="text-center text-gray-500 py-10">
        No users found
      </div>
    );
  }

  return (
    <>
      <div className="bg-white shadow rounded-lg">
      
        <div className="overflow-x-auto md:overflow-x-visible">
          
          <div className={shouldScroll ? "max-h-[600px] overflow-y-auto" : ""}>
            <table className="w-full min-w-[720px] md:min-w-full border-collapse">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="p-3 text-left w-12">#</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left min-w-[160px]">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((u, index) => (
                  <tr
                    key={u.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-3 text-gray-500">
                      {index + 1}
                    </td>

                    <td className="p-3 font-medium whitespace-nowrap">
                      {u.firstName} {u.lastName}
                    </td>

                    <td className="p-3 text-gray-600 whitespace-nowrap">
                      {u.email}
                    </td>

                    <td className="p-3">
                      <div className="flex flex-nowrap gap-2">
                        <button
                          onClick={() => setEditUser(u)}
                          className="min-w-[64px] px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer text-sm"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => setDeleteId(u.id!)}
                          className="min-w-[64px] px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      <Modal
        isOpen={!!deleteId}
        title="Confirm Delete"
        onClose={() => setDeleteId(null)}
      >
        {loading ? (
          <div className="text-center py-6">Deleting...</div>
        ) : (
          <>
            <p className="mb-4">
              Are you sure you want to delete this user?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 border rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </Modal>

      
      <Modal
        isOpen={!!editUser}
        title="Edit User"
        onClose={() => setEditUser(null)}
      >
        {loading ? (
          <div className="text-center py-6">Saving...</div>
        ) : (
          editUser && (
            <UserForm
              defaultValues={editUser}
              onSubmit={handleEdit}
              onSuccess={() => setEditUser(null)}
              onCancel={() => setEditUser(null)}
            />
          )
        )}
      </Modal>
    </>
  );
}
