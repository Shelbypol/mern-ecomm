import React, { useState, useEffect, isValidElement } from "react";
import { auth } from "../../firebase";
import { signInWithEmailLink, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";


const RegisterComplete = ( {history} ) =>{

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    useEffect(() =>{
        setEmail(window.localStorage.getItem("emailForRegistration"))
    }, []) //whenever the 2nd arg runs the first fn arg is called


    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!email || !password){
            toast.error('Email and password is required')
            return;
        }

        if(password.length < 6){
            toast.error('Password must be 6 charactes long')
            return;
        }

        try{
            const result = await signInWithEmailLink(auth, email, window.location.href )
            // console.log('result', result)

            if(result.user.emailVerified){
                // remove user email from local storage
                window.localStorage.removeItem("emailForRegistration")
                
                // firebase will keep track of the currently logged in user by using auth.currentUser
                let user = auth.currentUser;
                console.log('user', user )

                // updatePassword from firebase
                await updatePassword(auth, password)

                // get user id token - this will be how we communicate with the backend
                // getIdTokenResult firebase resut to get user token
                const idTokenResult = await user.getIdTokenResult()
                console.log('user', user, 'idTokenResult', idTokenResult)
                // redux store
                

                // redirect
                // uses BrowserRouters history to push us to a different site location
                // history.push('/')

            }

        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
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
