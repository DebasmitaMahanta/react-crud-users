import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Users, UserPlus, Info, Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass =
        "flex items-center gap-2 hover:text-yellow-300 transition duration-200";

    return (
        <nav className=" sticky top-0 z-50 bg-purple-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">

                    <Link
                        to="/users"
                        className="flex items-center gap-2 text-2xl font-bold tracking-wide"
                    >

                        User Manager
                    </Link>


                    <ul className="hidden md:flex gap-8 font-medium">
                        <li>
                            <NavLink to="/users" className={linkClass}>
                                <Users size={18} />
                                Users
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/add-user" className={linkClass}>
                                <UserPlus size={18} />
                                Add User
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={linkClass}>
                                <Info size={18} />
                                About
                            </NavLink>
                        </li>
                    </ul>


                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isOpen && (
                    <ul className="flex flex-col gap-4 mt-6 md:hidden font-medium">
                        <li>
                            <NavLink
                                to="/users"
                                className={linkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                <Users size={18} />
                                Users
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/add-user"
                                className={linkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                <UserPlus size={18} />
                                Add User
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={linkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                <Info size={18} />
                                About
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
