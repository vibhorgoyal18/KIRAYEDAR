import React, {useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import Input from "../components/InputComponent";

const SignUpPage = () => {
    const [useInfo, setInfo] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    });
    let navigate = useNavigate();
    const handleInputChange = (event) => {
        setInfo({[event.target.id]: event.target.value});
    };

    return (<div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 70px)"}}>
        <div
            className="card"
            style={{
                width: "40vw",
                paddingBottom: "20px",
                paddingTop: "10px",
                paddingLeft: "20px",
                paddingRight: "20px"
            }}
        >
            <div className="container">
                <div className="row">
                        <span
                            className="fw-bold text-center text-theme-color"
                            style={{
                                fontSize: "30px", color: "#2D3A86",
                            }}>
                         Sign Up
                         </span>
                </div>
                <form className="form-group form-outline mt-3">
                    <div className="row justify-content-center">
                        <div className="col-6" style={{padding: "auto"}}>
                            <Input label="FirstName" onTextChange={handleInputChange}/>
                        </div>
                        <div className="col-6" style={{padding: "auto"}}>
                            <Input label="LastName" onTextChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <Input label="Email" type="email" onTextChange={handleInputChange}/>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <Input label="Password" type="password" onTextChange={handleInputChange}/>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <Input label="ConfirmPassword" type="password" onTextChange={handleInputChange}/>
                    </div>
                    <div className="row justify-content-center">
                        <button
                            type="submit"
                            className="btn bg-theme-color text-white mt-4"
                            style={{width: "200px"}}
                            onClick={() => navigate("/dashboard")}
                        >
                            Sign up
                        </button>
                    </div>
                    <div className="row">
                        <span className="text-center mt-3">
                            <h6>Haven't signed up yet?  <NavLink to="/" className="text-theme-color">Login</NavLink></h6>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>);
};

export default SignUpPage;
