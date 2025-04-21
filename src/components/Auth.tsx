import { SignupInput, SigninInput } from "@subal999/common";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInput, setpostInput] = useState<SignupInput | SigninInput>(
        type === "signup"
            ? { name: "", email: "", password: "" }
            : { email: "", password: "" }
    );
    const [loading, setLoading] = useState(false);

    async function sendRequest() {
        setLoading(true);
        try {

            const response = await axios.post(`https://backend.subalkundu3.workers.dev/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInput);
            if (response.status !== 200) {
                throw new Error("Authentication failed!");
            }
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blog");
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div>
                    <div className="pb-4">
                        <div className="text-3xl font-extrabold mb-1">Create an account</div>
                        <div className="text-sm font-light text-slate-400 ">{type === "signin" ? "Dont't have an account ?" : "Alraedy have an account ?"}
                            <Link to={type === "signin" ? "/signup" : "/signin"} className="text-sm font-semibold text-blue-500 pl-2">{type === "signin" ? "sign up" : "sign in"}</Link>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();

                        }}>
                            {type === "signup" ?
                                <LaballedInput id="name" label="Name" placeholder="John Doe" autocomplete="given-name" onChange={(e) => {
                                    setpostInput({ ...postInput, name: e.target.value });
                                }} /> : null}

                            <LaballedInput id="username" label="Username" placeholder="XYZ@gmail.com" autocomplete="email" onChange={(e) => {
                                setpostInput({ ...postInput, email: e.target.value });
                            }} />

                            <LaballedInput id="password" label="Password" type="password" placeholder="12345@&^%" autocomplete="new-password" onChange={(e) => {
                                setpostInput({ ...postInput, password: e.target.value });
                            }} />
                        </form>
                    </div>

                    <button
                        onClick={sendRequest}
                        type="button"
                        className="mt-8 w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center justify-center gap-2"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                                Loading...
                            </>
                        ) : (
                            type === "signup" ? "Sign up" : "Sign in"
                        )}
                    </button>

                </div>
            </div>
        </div>
    );
}


interface laballedInputTypes {
    id?: string,
    label: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    autocomplete?: string

}

function LaballedInput({ label, placeholder, onChange, type, id, autocomplete, }: laballedInputTypes) {
    return (

        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-black-900 pt-4">{label}</label>
            <input autoComplete={autocomplete} onChange={onChange} type={type || "text"} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>

    )
}