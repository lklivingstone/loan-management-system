import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../api/RequestMethods";
import { Button } from "../../components/button/Button";
import { FormCard } from "../../components/form-card/FormCard"
import "./Login.css";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user_details);

    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true)
        login(dispatch, { username, password });
        setLoading(false)
    };

    const handleKeyDown = (e) => {
        if (e.code === "Enter") {
        handleClick(e);
        }
    };

    return (
        <FormCard title="LOGIN">
            <form className="login-container">
                <input className="input" 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <input className="input" 
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <a className="forgot-password">
                Forgot Password
                </a>
                <Link
                to="/register"
                className="register-link"
                >
                    Create new account
                </Link>
            </form>
            <div className="button-container">
                <Button
                    label="LOGIN"
                    onClick={handleClick}
                    disabled={isFetching}
                />
                <br />
                {
                    error && 
                    <span style={{ color: "red" }}>
                        Something went wrong!
                    </span>
                }
            </div>
        </FormCard>
    );
};