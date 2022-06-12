import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ redirectPath = "/login", children }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default PrivateRoute;
