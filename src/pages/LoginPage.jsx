import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Input from "../components/Input";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [useInfo, setInfo] = useState({
        email: null, password: null,
    });
    const handleInputChange = (event) => {
        setInfo({[event.target.id]: event.target.value});
    };
    const navigate = useNavigate();
    const login = () => {
        //get users from firebase
        //check if username and password entered matches with the users above
        // if true: navigate to /dashboard
        navigate("/dashboard");
        // if false: show error
    }

    return (<div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 70px)"}}>
        <div
            className="card"
            style={{
                width: "30vw",
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
                         Log In
                         </span>
                </div>
                <form className="form-group form-outline">

                    <div className="row justify-content-center">
                        <Input label="Email" type="email" onTextChange={handleInputChange}/>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <Input label="Password" type="password" onTextChange={handleInputChange}/>
                    </div>
                    <div className="row justify-content-center">
                        <button
                            type="submit"
                            className="btn bg-theme-color text-white mt-4"
                            style={{width: "200px"}}
                            onClick={login}
                        >
                            Log In
                        </button>
                    </div>
                    <div className="row">
                        <span className="text-center mt-3">
                            <h6>Haven't signed up yet?</h6>
                        </span>
                    </div>
                    <div className="row justify-content-center">
                        <NavLink to="/signup" style={{textDecoration: "none"}}>
                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn btn-outline-theme mt-3"
                                    style={{width: "200px"}}
                                >
                                    Get Started
                                </button>
                            </div>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    </div>);
};

export default LoginPage;
