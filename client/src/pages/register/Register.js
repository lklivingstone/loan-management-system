import { styled } from "@mui/system"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../api/RequestMethods";
import { FormCard } from "../../components/form-card/FormCard"
import { Button } from "../../components/button/Button";
import ReactLoading from "react-loading";
import './Register.css';

export const Register = () => {
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const [confirmPassword, setConfirmPassword]= useState("")
    const [firstname, setFirstname]= useState("")
    const [lastname, setLastname]= useState("")
    const [email, setEmail]= useState("")
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [loading, setLoading] = useState(false)

    const navigate= useNavigate()

    const { isFetching, error }= useSelector(state=>state.user)

    const handleClick = async (e) => {
        e.preventDefault()

        if (password!==confirmPassword) {
            setPasswordMismatch(true)
        }
        else {
            setLoading(true)
            const response= await register({ firstname, lastname, username, email, password })
            
            setLoading(false)
            if (response.status===200) {
                navigate("/login")
            }
            else {
                const { username, email } = response['message'];
                
                if (username && email){
                    alert("Username and Email already in use!")
                }
                else if (email) {
                    alert("Email already in use!")
                }
                else if (username){
                    alert("Username already in use!")
                }
                else {
                    alert("Invalid Credentials!")
                }
            }
        }
    }
    const handleKeyDown = (e) => {
        if (e.code === "Enter") {
            handleClick(e)
        }
    };
    return (
        <FormCard title="CREATE AN ACCOUNT">
            <form className="register-container">
                <input className="input" 
                    placeholder="First Name" 
                    onChange={(e)=>setFirstname(e.target.value)}
                />
                <input className="input" 
                    placeholder="Last Name" 
                    onChange={(e)=>setLastname(e.target.value)}
                />
                <input className="input" 
                    placeholder="Username" 
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <input className="input" 
                    placeholder="E-Mail" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                <input 
                    className={passwordMismatch ? 'input mismatch' : 'input'}
                    type="password" 
                    placeholder="Password" 
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input 
                    className={passwordMismatch ? 'input mismatch' : 'input'}
                    type="password" 
                    placeholder="Confirm Password" 
                    onChange={(e)=>setConfirmPassword(e.target.value)} 
                    onKeyDown={handleKeyDown}
                />
                <span className="small-text">
                    By creating an account <b>PRIVACY POLICY</b>
                </span>
            </form>
            <div className="button-container">
                {
                    loading && 
                    <ReactLoading 
                    type="bubbles" color="black"
                    height={100} width={50} />
                }
                {
                !loading && 
                    <Button
                        label="REGISTER"
                        onClick={handleClick}
                    />
                }
            </div>
        </FormCard>
    )
}