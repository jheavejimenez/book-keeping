import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [errors, setError] = useState("");

    const handleSubmit = async () => {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert("Password reset email sent!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorCode, errorMessage);
            });
    };

    return (
        <>
            <div className={"bg-gray-100 flex justify-center mx-auto min-h-screen items-center"}>
                <div className={"bg-white mx-auto p-9 w-96 shadow-lg rounded-lg"}>
                    <div className={""}>
                        <h3 className={"font-bold text-3xl mb-6 text-center"}>Forgot password</h3>
                        <div className={"my-5"}>
                            <p className="text-center">
                                We get it, stuff happens. Just enter your</p>
                            <p className="text-center">email address below and we'll send you</p>
                            <p className="text-center">a link to reset your password!</p>

                            <div className="mb-4">
                                <label className="block mb-4 mt-10 text-sm font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <Input
                                    name={"email"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type={"email"}
                                    placeHolder={"Email"}
                                    className={" w-full px-4 py-2 mt-2 border rounded-md " +
                                        " focus:outline-none focus:ring-1 focus:ring-blue-600 "}
                                />
                            </div>
                            <div className="text-center">
                                <button onClick={handleSubmit}
                                        className={" px-6 py-2 mt-4 text-white bg-[#00A2E8] rounded-lg " + 
                                        " hover:bg-[#00A2E8] mb-5 "}>
                                    Reset Password
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-black-500 align-baseline hover:underline"
                                    href="/signup"
                                >
                                    Create an Account!
                                </a>
                            </div>
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-black-500 align-baseline hover:underline"
                                    href="/"
                                >
                                    Already have an account? Login!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;
