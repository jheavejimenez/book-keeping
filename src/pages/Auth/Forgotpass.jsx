import React from "react";


function Forgotpass() {
    return (
        <>
            <div className={"bg-gray-100 flex justify-center mx-auto min-h-screen items-center"}>
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
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email Address..."
                                />
                            </div>
                            <div className="text-center">
                                <button className="px-6 py-2 mt-4 text-white bg-[#00A2E8] rounded-lg hover:bg-[#00A2E8] mb-5">
                                    Reset Password
                                </button>
                            </div>
                            <hr className="mb-6 border-t"/>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="/Signup"
                                    >
                                        Create an Account!
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
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

export default Forgotpass;