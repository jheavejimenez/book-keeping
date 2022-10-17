import React from "react";
import { useState } from "react";
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
            <div className={"bg-gray-300 flex justify-center mx-auto min-h-screen items-center"}>
                <div className={"bg-white mx-auto p-9 rounded-lg"}>
                    <div className={""}>
                            <span className={"font-bold text-3xl mb-6 text-center"}> Forgot password</span>
                        <div className={"my-5"}>
                            <p>
                                We get it, stuff happens. Just enter</p>
                            <p>your email address below and we'll send  </p>
                                you a link to reset your password!

                                    <div className="mb-4">
                                        <label className="block mb-4 mt-10 text-sm font-bold text-gray-700" htmlFor="email">
                                            Email
                                        </label>
                                        <Input
                                            name={"email"}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type={"email"}
                                            placeHolder={"Email"}
                                            className={"w-full px-4 py-2 mt-2 border rounded-md " +
                                                "focus:outline-none focus:ring-1 focus:ring-blue-600"}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button  onClick={handleSubmit} className="px-6 py-2 mt-4 text-white bg-[#00A2E8] rounded-lg hover:bg-[#00A2E8] mb-5">
                                            Reset Password
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t"/>
                                        <div className="text-center">
                                            <a
                                                className="inline-block text-sm text-black-500 align-baseline hover:underline"
                                                href="/Signup"
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