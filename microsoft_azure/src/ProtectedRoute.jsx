import { Navigate } from "react-router-dom";
// Protected Route for the if user not Authenticated
const ProtectedRoute = (props) => {
  if (!props.isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return props.children;
};

export default ProtectedRoute;