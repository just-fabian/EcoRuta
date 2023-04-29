import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequiereAuth = () => {
  const auth = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  return auth?.id_admin ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

export default RequiereAuth;
