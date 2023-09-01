import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/UserRedux";
import { Button } from "../../components/button/Button";
import { FormCard } from "../../components/form-card/FormCard"
import "./Logout.css";

export const Logout = () => {
    const user = useSelector((state)=>state.user_details.user["username"])
    const dispatch= useDispatch()

    const navigate= useNavigate()

    const handleClick = (e) => {
        dispatch(logOut())

        navigate("/")
    }

    return (
        <FormCard title={`Do you want to logout ${user}?`}>
            <div className="button-container">
                <Button
                    label="LOGOUT"
                    onClick={handleClick}
                />               
            </div>
        </FormCard>             
    )
}