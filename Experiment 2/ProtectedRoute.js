import {navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import { Children } from "react";

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <navigate to="/login" replace/>

    }
    return children;}

    export default ProtectedRoute;