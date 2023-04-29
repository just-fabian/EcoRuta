import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getToken } from '../api/commonAuthAPI';
import BackBar from '../components/BackBar';
import InputBlock from '../components/common/InputBlock';
import {
  validateEmail,
  validatePassword,
  verifyCredentials
} from '../utils/validation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
  }, []);

  const navigate = useNavigate();

  const errRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrMsg('Invalid Email');
      errRef.current.focus();
      return;
    }
    if (!validatePassword(password)) {
      setErrMsg('Invalid Password');
      errRef.current.focus();
      return;
    }
    verifyCredentials(email, password).then(res => {
      if (res) {
        setErrMsg('Email or Password incorrect');
        errRef.current.focus();
        return;
      }
      getToken(email).then(token => {
        localStorage.setItem(
          'user',
          JSON.stringify({ email, id_admin: token.data.token })
        );
        navigate('/dashboard');
      });
    });
  };

  return (
    <div className='bg-[#b8bec3]/10 flex flex-col h-screen items-center'>
      <BackBar />
      <div
        className='grid grid-cols-6 gap-10 bg-white p-20 
      rounded-[24px] shadow-2xl m-auto mx-10'
      >
        <div className='col-span-2'>
          <img
            className='w-full'
            height='200'
            src='/assets/login-logo.svg'
            alt='logo'
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className='col-span-4 m-auto flex flex-col justify-center w-full'
        >
          <div className='flex justify-end'>
            <p
              ref={errRef}
              className={`font-bold p-4 rounded-lg
              ${errMsg === '' ? 'hidden' : 'block'} 
              border-[1px] border-red-500 bg-red-100 text-[24px] 
              font-sans mb-8`}
            >
              {errMsg}
            </p>
          </div>
          <InputBlock
            type='email'
            value={email}
            setValue={setEmail}
            label='Email'
            placeholder='Please enter your email'
            required
            isFull
          />
          <InputBlock
            value={password}
            label='Password'
            setValue={setPassword}
            required
            input='Please enter your password'
            type='password'
          />
          <button
            type='submit'
            className='w-full rounded-3xl border-transparent border py-1 my-3 
          bg-[#276471] text-[32px] font-aclonica text-white shadow-lg 
          hover:bg-[#276471]/90 active:bg-[#249898] transition duration-100 
          active:ring-2 active:ring-[#276471] active:ring-offset-2
          active:transform active:scale-95'
          >
            Login
          </button>
          <div className='flex justify-end'>
            <Link
              to='/register'
              className='mt-2 font-semibold text-[20px] hover:underline 
            active:transform active:scale-95 transition duration-100'
            >
              Don't you have an account yet?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
