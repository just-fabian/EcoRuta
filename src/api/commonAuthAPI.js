import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mdncommon-auth-server-production.up.railway.app/api/v1/auth'
});

export const postApplication = async app => await API.post('/app/new', app);

export const postAdmin = async admin => await API.post('/admin/new', admin);

export const verifyAdmin = async email =>
  await API.get(`/admin/verify/${email}`);

export const verifyCredentialsAdmin = async (email, password) =>
  await API.get(`/admin/verify/credentials/${email}/${password}`);

export const getToken = async email => await API.get(`/admin/token/${email}`);

export const getApps = async token => await API.get(`/admin/apps/${token}`);

export const verifyAppPasswordCredentials = async app_id =>
  await API.get(`/app/verify/${app_id}`);

export const verifyIfAppExist = async name =>
  await API.get(`/app/verify/${name}`);
