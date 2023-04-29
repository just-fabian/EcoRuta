import { Link, useNavigate } from 'react-router-dom';

export default function BackBar() {
  const navigate = useNavigate();

  return (
    <div
      className='w-full bg-gradient-to-r from-[#BDC3C7]/60 via-[#74808B]/80 
    to-[#2C3E50] flex justify-between content-center px-28'
    >
      <Link to='/' className='my-auto text-[40px] font-aclonica text-[#404040]'>
        Common Auth Applications
      </Link>
      <button
        onClick={() => navigate(-1)}
        className='rounded-xl py-1 px-7 my-3  bg-white text-[26px] 
          font-aclonica text-black shadow-lg hover:bg-white/90 
          active:bg-black active:text-white 
          transition duration-100 active:transform active:scale-95'
      >
        Back
      </button>
    </div>
  );
}
