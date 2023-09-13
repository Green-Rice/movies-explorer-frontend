import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, ...props }) =>
  loggedIn ? <Component {...props} /> : <Navigate to="/" replace />;

export default PrivateRoute;
