import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useState } from "react";
import { useAuth } from "../Hooks";

export const AppBar = () => {
    const [logOut, setLogOut] = useState(false);
    const navigate = useNavigate();
    const name = useAuth();
    console.log(name);

    return (
        <div className="border-b flex justify-between px-10 py-4 relative">
            <div className="flex flex-col justify-center text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity duration-300 ">
                <Link to="/Blog">BLOG world</Link>
            </div>

            <div>
                <Link to="/publish">
                    <button
                        type="button"
                        className="mr-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
                    >
                        Post Blog
                    </button>
                </Link>

                <Avatar
                    
                    name={name}
                    size={"large"}
                    onClick={() => {
                        setLogOut(!logOut);
                    }}
                />

                {logOut && (
                    <ul className="cursor-pointer absolute right-3 top-16 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-cursor-pointer absolute  right-3 top-9  text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900  mt-6 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6">
                        <li
                            onClick={() => {
                                navigate("/");
                                localStorage.removeItem("token");
                            }}
                        >
                            Log Out
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};
