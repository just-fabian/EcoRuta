import BottomNav from '../partials/BottomNav';
import Header from '../partials/Header';
import Map from '../partials/DumpsterMap';

export default function Home() {
  return (
    <div className='w-full'>
      <Header />
      <Map/>
      <BottomNav/>
    </div>
  );
}
