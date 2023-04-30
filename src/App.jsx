import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import RequiereLogin from './verifiers/RequiereLogin';
import RequiereAuth from './verifiers/RequireAuth';
import Dumpsters from './pages/Dumpsters';
import Trucks from './pages/Trucks';
import Truck from './pages/TruckInfo';

export default function App() {
  return (
    <div className='flex flex-col h-screen items-center'>
      <Routes>
        <Route element={<RequiereLogin />}>
          <Route path='/' element={<Home />} />
          <Route path='/dumpsters' element={<Dumpsters />} />
          <Route path='/trucks' element={<Trucks />} />
            <Route path='/truck:truckId' element={<Truck />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route element={<RequiereAuth />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
