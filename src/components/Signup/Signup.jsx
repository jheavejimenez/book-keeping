import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import Button from "../Button/Button";
import Input from "../Input/Input";

function Signup() {
  return(
    <>
      <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
            <div className={"px-8 py-6 mt-4 text-left bg-white shadow-lg w-96"}>
                <h3 className={"text-2xl font-bold text-center"}>Signup</h3>
                <form action="">
                    <div className={"mt-4"}>
                        <div>
                            <Input placeHolder={"Username"} type={"text"}/>
                        </div>
                        <div className={"mt-4"}>
                            <Input type={"text"} placeHolder={"Email"}/>
                        </div>
                        <div className={"mt-4"}>
                            <Input type={"text"} placeHolder={"Company"}/>
                        </div>
                        <div className={"mt-4"}>
                            <Input type={"password"} placeHolder={"Password"}/>
                        </div>
                        <div className={"mt-4"}>
                            <Input type={"password"} placeHolder={"Re-enter Password"}/>
                        </div>
                            <div className={"flex flex-col place-items-center mt-5"}>
                                <Button text={"Sign Up"} />
                                <a href={"/"} className={"text-sm text-blue-600 hover:underline mt-5"}>Already Have an Account ? Login</a>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    
    )   
}

export default Signup