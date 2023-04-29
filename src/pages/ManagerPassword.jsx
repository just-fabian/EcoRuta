import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyAppPasswordCredentials } from '../api/commonAuthAPI';

export default function ManagerPassword() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const { app_id } = useParams();

  useEffect(() => {
    setErrMsg('');
  }, [password]);

  const handleSubmit = async e => {
    try {
      verifyAppPasswordCredentials({ app_id, password }).then(_res => {
        navigate('edit/app/' + app_id);
      });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login App Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className='grid content-center h-full'>
      <div
        className='grid grid-cols-4 gap-6 
      rounded-lg '
      >
        <div className='align-content'>
          <img
            className='object-scale-down h-48 w-96'
            height='200'
            src='/assets/login-logo.svg'
            alt='logo'
          />
          <h2 className='text-5xl italic font-bold text'>@Application{}</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className='col-span-12 sm:col-span-4 my-auto'
        >
          <label
            className='block text-[24px] font-sans text-[#404040] 
          font-semibold'
          >
            Manager Password
            <p ref={errRef}>{errMsg}</p>
            <input
              type='password'
              className='mb-4 mt-2 block w-full rounded-r-xl border 
              border-black focus-visible:outline-none 
              focus-visible:border-[#249898] text-[24px] font-sans'
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder='Please enter your password'
              required
            />
          </label>
          <button
            type='submit'
            className='w-full inline-flex justify-center rounded-3xl border 
            border-transparent bg-[#276471] py-1 text-[32px] font-aclonica 
            text-white shadow-lg hover:bg-[#276471]/90 focus:bg-[#249898]/90 
            active:bg-[#249898] transition duration-150 focus:ring-2 
            focus:ring-[#276471] focus:ring-offset-2'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
