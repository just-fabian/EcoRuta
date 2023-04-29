import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getApps } from '../api/commonAuthAPI';

export default function Dashboard() {
  const [apps, setApps] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('user'));
    getApps(admin.id_admin).then(res => {
      setApps(res.data);
      console.log(res.data);
    });
  }, []);

  const logoutAdmin = e => {
    e.preventDefault();
    localStorage.removeItem('user');
    navigate('/');
  };

  const creatApp = e => {
    e.preventDefault();
    navigate('/new/app');
  };

  return (
    <div className='h-screen flex flex-col w-full'>
      <div
        className='flex justify-between bg-gradient-to-r from-[#BDC3C7]/60 
        via-[#74808B]/80 to-[#2C3E50] px-28 rounded-b-3xl'
      >
        <Link
          to='/'
          className='my-auto text-[40px] font-aclonica text-[#404040]'
        >
          Common Auth Applications
        </Link>
        <div className='flex gap-10'>
          <button
            onClick={creatApp}
            className='rounded-xl py-1 px-7 my-3  bg-white text-[26px] 
          font-aclonica text-black shadow-lg hover:bg-white/90 
          active:bg-black active:text-white 
          transition duration-100 active:transform active:scale-95'
          >
            Create App
          </button>
          <button
            onClick={logoutAdmin}
            className='rounded-xl py-1 px-7 my-3  bg-white text-[26px] 
          font-aclonica text-black shadow-lg hover:bg-white/90 
          active:bg-black active:text-white 
          transition duration-100 active:transform active:scale-95'
          >
            Logout
          </button>
        </div>
      </div>
      <div className='w-full grid grid-cols-3 gap-20 m-14 p-14'>
        {apps.map((app, index) => {
          return (
            <div key={index}>
              <button>
                <img
                  src={app.image_url}
                  className='w-[300px] justify-center flex flex-col'
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
