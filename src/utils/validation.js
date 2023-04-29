import {
  verifyAdmin,
  verifyCredentialsAdmin,
  verifyIfAppExist
} from '../api/commonAuthAPI';

const emailRegex = /^[a-zA-Z0-9_.]+@(hotmail|gmail|yahoo|outlook)\.com?$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)([a-zA-Z\d\W]){6,15}$/;

export const validateEmail = email => {
  return Boolean(email.match(emailRegex));
};

export const validatePassword = password => {
  return Boolean(password.match(passwordRegex));
};

export const verifyExist = async email => {
  try {
    const response = await verifyAdmin(email);
    return response.data.message === 'Admin already registered';
  } catch (error) {
    throw new Error(error);
  }
};

export const verifyCredentials = async (email, password) => {
  try {
    password = window.btoa(password);
    const response = await verifyCredentialsAdmin(email, password);
    return (
      response.data.message === 'Invalid Password' ||
      response.data.message === 'User not found'
    );
  } catch (error) {
    throw new Error(error);
  }
};

export const verifyIfAppAlreadyExist = async name => {
  try {
    const response = await verifyIfAppExist(name);
    return response.data.message === 'App Name already exist';
  } catch (err) {
    throw new Error(err);
  }
};
