import { useContext } from "react";
import { myContext } from "../../Context/ContextProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(myContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
    
};

export default PrivateRoute;