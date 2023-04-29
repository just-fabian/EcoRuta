import BottomNav from '../partials/BottomNav';
import Header from '../partials/Header';
import { useState } from 'react';
import Map from '../partials/Map';

export default function Home() {

  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className='w-full'>
      <Header />
      {
        isLogged ? <Map/> : <div>LANDING PAGE</div>
      }
      <BottomNav/>
    </div>
  );
}
