import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";


const RegisterComplete = ( {history} ) =>{

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    useState(() =>{
        setEmail(window.localStorage.getItem("emailForRegistration"))
    }, []) //whenever the 2nd arg runs the first fn arg is called


    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    

    const completeRegisterForm = () => <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            className="form-control" 
            value={email} 
            disabled>
        </input>
        <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}
            autoFocus
            placeholder="enter password"
            >
        </input>
        <br/>
        <button 
            type="submit" 
            className="btn btn-primary btn-raised" 
            name="register">complete registration:
        </button>
    </form>

    return (
        <div className="container P-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Complete Registration</h4>
                    {completeRegisterForm()}
                </div>
            </div>  
        </div>
    )
};
export default RegisterComplete;
