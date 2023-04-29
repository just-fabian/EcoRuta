import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import RequiereLogin from './verifiers/RequiereLogin';
import RequiereAuth from './verifiers/RequireAuth';
import Services from './pages/Services';
import Trucks from './pages/Truck';

export default function App() {
  return (
    <div className='flex flex-col h-screen items-center'>
      <Routes>
        <Route element={<RequiereLogin />}>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/trucks' element={<Trucks />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route element={<RequiereAuth />}>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
