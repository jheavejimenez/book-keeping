import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

function Login() {
    return (
        <>
            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className={"px-8 py-6 mt-4 text-left bg-white shadow-lg w-96"}>
                    <h3 className={"text-2xl font-bold text-center"}>Login</h3>
                    <form action="">
                        <div className={"mt-4"}>
                            <div>
                                <Input placeHolder={"Email"} type={"text"}/>
                            </div>
                            <div className={"mt-4"}>
                                <Input type={"password"} placeHolder={"Password"}/>
                            </div>
                            <div className={"flex flex-col place-items-center"}>
                                <Button text={"Login"}/>
                                <a href="#" className={"text-sm text-blue-600 hover:underline mt-5"}>Forgot
                                    password?</a>
                                <a href={"/Signup"} className={"text-sm text-blue-600 hover:underline mt-5"}>Sign Up</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login
