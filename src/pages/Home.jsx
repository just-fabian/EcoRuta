import BottomNav from '../partials/BottomNav';
import Header from '../partials/Header';
import { useState } from 'react';
import Map from '../partials/MapView';

export default function Home() {


  return (
    <div className='w-full'>
      <Header />
      <Map/>
      <BottomNav/>
    </div>
  );
}
