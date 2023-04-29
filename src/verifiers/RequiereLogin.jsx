import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequiereAuth = () => {
  const auth = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  return auth?.id_admin ? (
    <Navigate to='/dashboard' state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RequiereAuth;
