import React, { useState } from "react";

const Register = () =>{

    const [email,setEmail ] = useState("")

    const handleSubmit = (e) => {
    }

    const registerForm = () => <form onSubmit={handleSubmit}>
        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value) } autoFocus></input>
    </form>

    return (
        <div className="container P-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                    <button type="submit" className="btn btn-primary btn-raised" name="register">register:</button>
                    <span> {email}</span>
                </div>
                {/* <div className="col-md-6 offset-md-9">
                    
                </div> */}
            </div>
           
           
        </div>
    )
};
export default Register;
