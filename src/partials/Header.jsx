import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [top, setTop] = useState(true);
  const navigate = useNavigate();

  const signup = () => {
    navigate('/register');
  };

  const login = () => {
    navigate('/login');
  };
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <div
      className='flex justify-between bg-gradient-to-r from-[#BDC3C7]/60
      via-[#74808B]/80 to-[#2C3E50] px-28 rounded-b-3xl sticky top-0 z-50'
    >
      <Link to='/' className='my-auto text-[40px] font-aclonica text-[#404040]'>
        Header
      </Link>
      <div className='flex gap-10'>
        <button
          onClick={signup}
          className='rounded-xl py-1 px-7 my-3  bg-white text-[26px]
        font-aclonica text-black shadow-lg hover:bg-white/90
        active:bg-black active:text-white
        transition duration-100 active:transform active:scale-95'
        >
          Signup
        </button>
        <button
          onClick={login}
          className='rounded-xl py-1 px-7 my-3  bg-white text-[26px]
        font-aclonica text-black shadow-lg hover:bg-white/90
        active:bg-black active:text-white
        transition duration-100 active:transform active:scale-95'
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default Header;
