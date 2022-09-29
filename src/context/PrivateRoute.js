import {useAuth} from "./AuthContext";
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const auth = useAuth()
    return auth.user ? children : <Navigate to={"/"}/>
}

export default ProtectedRoute;