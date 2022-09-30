import { auth } from '../../utils/Firebase'
import { sendEmailVerification } from 'firebase/auth'

function VerifyEmail() {

    const resendEmailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
            }).catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div className='center'>
            <div className='verifyEmail'>
                <h1>Verify your Email Address</h1>
                <p>
                    <strong>A Verification email has been sent to:</strong><br />
                </p>
                <span>Follow the instruction in the email to verify your account</span>
                <button
                    onClick={resendEmailVerification}
                >Resend Email
                </button>
            </div>
        </div>
    )
}

export default VerifyEmail