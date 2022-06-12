import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginAdmin.css";
import { useAuth } from "../context/AuthContext";

function Login() {
    const initialValues = {
        email: "",
        password: "",
    };
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState("");
    const { signIn } = useAuth();

    const navigate = useNavigate();

    const handleChange = (e) => {
        setError("");
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.email.length > 10 && values.password.length > 5)
            try {
                await signIn(values.email, values.password);
                navigate("/admin");
            } catch (error) {
                setError("Email or password is not valid");
            }
        else setError("Please enter the details");
    };
    return (
        <div className="login-container">
            <div className="login-wrapper" onSubmit={handleSubmit}>
                <form>
                    <h2>Login Account</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={values.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="error">{error}</div>
            </div>
        </div>
    );
}

export default Login;
