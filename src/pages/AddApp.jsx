import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postApplication } from '../api/commonAuthAPI';
import BackBar from '../components/BackBar';
import Button from '../components/common/Button';
import InputBlock from '../components/common/InputBlock';
import { validatePassword, verifyIfAppAlreadyExist } from '../utils/validation';

export default function AddApp() {
  const [roles, setRoles] = useState([
    {
      id: 0,
      name: '',
      isDefault: true
    }
  ]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('/assets/appImage.png');
  const [app, setApp] = useState({});

  const auth = JSON.parse(localStorage.getItem('user'));
  const imageRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setApp({
      name,
      description,
      password,
      redirect_url: url,
      app_image: image,
      id_admin: auth.id_admin,
      roles
    });
  }, [image, url, password, description, name, roles]);

  const changeImage = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  const focusImage = _e => {
    imageRef.current.click();
  };

  const deleteRol = id => {
    if (roles.length > 1 && id !== 0) {
      const changedRol = roles.filter(roles => roles.id !== id);
      setRoles(changedRol);
    }
  };

  const addRol = () => {
    const id = roles[roles.length - 1].id + 1;
    const newRol = {
      id,
      name: '',
      isDefault: false
    };
    const changedRoles = [...roles, newRol];
    setRoles(changedRoles);
  };

  const handleChange = (index, e) => {
    const changedRoles = [...roles];
    changedRoles[index].name = e.target.value;
    setRoles(changedRoles);
  };

  const createApp = e => {
    e.preventDefault();
    verifyIfAppAlreadyExist(name).then(res => {
      if (res) {
        alert('App name already exist');
        return;
      }
      if (!validatePassword(password)) {
        alert(
          'Invalid password' +
            '\n\n · 6-15 Characters' +
            '\n · 1 number' +
            '\n · 1 Capital letter' +
            '\n · 1 Spetial character'
        );
      } else if (password !== confirmPassword) {
        alert('The password and the confirm password are different');
      } else {
        postApplication(app).then(_res => {
          navigate('/dashboard');
        });
      }
    });
  };

  return (
    <div className='bg-white flex flex-col h-screen items-center'>
      <BackBar />
      <div
        className='grid grid-cols-6 gap-10 bg-white p-10 
      rounded-[24px] shadow-2xl m-auto'
      >
        <div className='col-span-2 flex flex-col justify-center w-full my-auto'>
          <img
            className='flex justify-center w-[400px] m-auto cursor-pointer 
            mb-[-15px] active:transform active:scale-95 transition 
            duration-100 shadow-lg'
            onClick={focusImage}
            width='300'
            src={image}
          />

          <input
            ref={imageRef}
            className='hidden absolute'
            type='file'
            onChange={changeImage}
            accept='image/*'
          />
        </div>
        <form
          onSubmit={createApp}
          className='col-span-4 m-auto flex flex-col justify-center w-full'
        >
          <InputBlock
            value={name}
            setValue={setName}
            label='Name'
            input='Enter the name of the page'
            type='text'
            className='bg-green-500'
          />
          <InputBlock
            value={description}
            setValue={setDescription}
            label='Description'
            type='text'
            input='Enter the description of the page'
          />
          <div>
            <label className='text-[24px]'>Roles</label>
            <div className='overflow-y-auto max-h-[7rem]'>
              {roles.map((role, index) => (
                <div
                  key={index}
                  className='flex justify-between w-ful mr-[20px]'
                >
                  <input
                    type='text'
                    value={role.name}
                    onChange={e => handleChange(index, e)}
                    className='border border-gray-500 p-0.5 focus:ring-2 py-1
                focus:ring-blue-500 w-full bg-transparent text-[24px]'
                    placeholder={`Enter ${
                      index === 0 ? 'the default' : 'a'
                    } rol`}
                    required
                  />
                  <button
                    onClick={() => deleteRol(role.id)}
                    className='border border-gray-500 w-[3rem] rounded-r-lg
                 py-1 text-[24px] font-bold'
                  >
                    -
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => addRol()}
              className='border border-gray-500 w-10 
            rounded-b-lg py-1 text-[20px] font-bold'
            >
              +
            </button>
          </div>
          <InputBlock
            value={password}
            setValue={setPassword}
            label='Manager password'
            input='Enter a password'
            type='password'
          />

          <InputBlock
            value={confirmPassword}
            setValue={setConfirmPassword}
            label='Repeat the manager password'
            input='Enter the password again'
            type='password'
          />
          <InputBlock
            value={url}
            setValue={setUrl}
            label='Page URL'
            type='url'
            input='Repeate the password'
          />
          <div className='flex justify-end'>
            <Button type='submit' isDark>
              Accept
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
