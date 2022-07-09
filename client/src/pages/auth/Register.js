import React, { useState } from "react";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";


const Register = () =>{

    const [ email, setEmail ] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()
        
        const config =  {
            url : process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp : true
        }

        await sendSignInLinkToEmail(auth, email, config)
        toast(`email is sent to ${email}. Click the link to complete your registration. Be sure to check your spam. `)

        // save in local storage
        window.localStorage.setItem('emailForRegistration', email)

        // clear email state
        setEmail('')
    }
    

    const registerForm = () => <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            className="form-control" 
            value={email} onChange={e => setEmail(e.target.value) } 
            autoFocus>
        </input>
        <button 
            type="submit" 
            className="btn btn-primary btn-raised" 
            name="register">register:
        </button>
        <span> {email} </span>
    </form>

    return (
        <div className="container P-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>  
        </div>
    )
};
export default Register;
