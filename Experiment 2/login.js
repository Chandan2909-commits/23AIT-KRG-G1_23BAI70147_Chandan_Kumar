import {useAuth} from "../context/AuthContext";
import{useNavigate} from "react-router-dom";
const Login = () => {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        setIsauthenticated(true);
        navigate("/");
    }
    return(
        <>
        <h3>Login</h3>
        <button onClick={handleLogin}>Login</button>
        </>
    )

}
    export default Login;