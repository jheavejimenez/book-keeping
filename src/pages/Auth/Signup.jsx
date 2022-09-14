import React, {useState} from "react";
import Input from "../../components/Input/Input";
import {supabase} from "../../utils/supabaseClient";
import Button from "../../components/Button/Button";

function Signup() {
    const [loading, setLoading] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [employeeName, setEmployeeName] = useState('')
    const [companyName, setCompanyName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await supabase.auth.signUp({email, password},
                {
                    data: {
                        username: username,
                        email: email,
                        employee_name: employeeName,
                        company: companyName,
                    }
                }
            )
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
                            <h3 className={"text-2xl font-bold text-center"}>Signup</h3>
                            <form onSubmit={handleSubmit}>
                                <div className={"mt-4"}>
                                    <div>
                                        <Input
                                            type={"text"}
                                            placeHolder={"Username"}
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className={"mt-4"}>
                                        <Input
                                            type={"password"}
                                            placeHolder={"Password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className={"mt-4"}>
                                        <Input
                                            type={"text"}
                                            placeHolder={"Full name"}
                                            value={employeeName}
                                            onChange={(e) => setEmployeeName(e.target.value)}
                                        />
                                    </div>
                                    <div className={"mt-4"}>
                                        <Input
                                            type={"email"}
                                            placeHolder={"Email"}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className={"mt-4"}>
                                        <Input
                                            type={"text"}
                                            placeHolder={"Company"}
                                            value={companyName}
                                            onChange={(e) => setCompanyName(e.target.value)}
                                        />
                                    </div>
                                    <div className={"flex flex-col place-items-center mt-5"}>
                                        <Button text={"Sign up with magic link"}/>
                                        <a href={"/"} className={"text-sm text-blue-600 hover:underline mt-5"}>Already
                                            Have an
                                            Account ? Login</a>
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

export default Signup