import React, {useState} from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {supabase} from "../../utils/supabaseClient";

function Login() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            await supabase.auth.signInWithOtp({email})
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className={"px-8 py-6 mt-4 text-left bg-white shadow-lg w-96"}>
                    {loading ? (
                        <div className={"flex flex-col place-items-center"}>
                            <h3 className={"text-2xl font-bold text-center"}>Sending magic link to email</h3>
                            <div className="flex items-center justify-center">
                                <div
                                    className="w-12 h-12 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"/>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h3 className={"text-2xl font-bold text-center"}>Login</h3>
                            <form>
                                <div className={"mt-4"}>
                                    <div>
                                        <Input
                                            placeHolder={"Email"}
                                            type={"text"}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className={"flex flex-col place-items-center"}>
                                        <Button path={"/dashboard"} text={"Login"}/>
                                        <a href="src/pages/Auth/Login#"
                                           className={"text-sm text-blue-600 hover:underline mt-5"}>Forgot
                                            password?</a>
                                        <a href={"/Signup"} className={"text-sm text-blue-600 hover:underline mt-5"}>Sign
                                            Up</a>
                                    </div>
                                </div>
                            </form>
                        </>
                    )}

                </div>
            </div>
        </>

    )
}

export default Login
