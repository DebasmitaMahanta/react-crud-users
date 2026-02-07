import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./componets/Navbar";
import UserListPage from "./pages/UserListPage";
import UsercreatePage from "./pages/UserPage";
import AboutPage from "./pages/AboutPage";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="h-full flex flex-col">
      
      <NavBar />

      
      <main className="flex-1 overflow-y-auto pt-5 px-4">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users" element={<UserListPage />} />
            <Route path="/add-user" element={<UsercreatePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>

      <Toaster position="top-right" />
    </div>
  );
}
