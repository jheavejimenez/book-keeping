import { auth } from '../../utils/Firebase'
import { sendEmailVerification } from 'firebase/auth'
import {useNavigate} from "react-router-dom";

function VerifyEmail() {

    const resendEmailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
            }).catch((err) => {
            alert(err.message)
        })
    }
    const navigate = useNavigate();

    return (
    <div className='flex min-h-screen items-center  justify-center'>
        <div className={"bg-slate-200 border-2 border-solid rounded-md border-sky-200 p-5 items-center"}>
            <div>
                <h1 className={"text-2xl font-bold tracking-wide mb-6"}>Verify your Email Address</h1>
                <div className={"mb-6"}>
                    <p className={"mb-3"}>
                        <strong >A Verification email has been sent to you!</strong><br />
                        Follow the instruction in the email to verify your account.
                    </p>
                    <span>If you haven't received an email, click <strong>Re-send Email.</strong> </span>
                <div className={"flex justify-between"}>
                    <button onClick={() => navigate("/")} className={" bg-blue-300 rounded w-20 p-2 mt-9 " + 
                    " hover:bg-blue-400 active:bg-blue-400 font-semibold "}>
                       Log in
                    </button>
                    <button onClick={resendEmailVerification} className={" bg-blue-300 rounded w-32 p-2 mt-9 " + 
                    " hover:bg-blue-400 active:bg-blue-400 font-semibold "}>
                        Re-send Email
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default VerifyEmail