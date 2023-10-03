import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedIn, ...props }) =>
  loggedIn ? <Component {...props} /> : <Navigate to="/" replace />;

export default ProtectedRoute;
