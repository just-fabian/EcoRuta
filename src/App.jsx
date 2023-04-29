import { Route, Routes } from 'react-router-dom';
import AddApp from './pages/AddApp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import RequiereLogin from './verifiers/RequiereLogin';
import RequiereAuth from './verifiers/RequireAuth';

export default function App() {
  return (
    <div className='flex flex-col h-screen items-center'>
      <Routes>
        <Route element={<RequiereLogin />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
        </Route>
        <Route element={<RequiereAuth />}>
          <Route path='/new/app' element={<AddApp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
