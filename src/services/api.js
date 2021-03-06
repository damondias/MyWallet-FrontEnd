import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/mywallet`;

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

async function login(body) {
  const promise = await axios.post(`${BASE_URL}/sign-in`, body);

  return promise;
}

async function signUp(body) {
  const promise = await axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

async function getRegistries(token) {
  const config = createConfig(token);

  const promise = await axios.get(`${BASE_URL}/wallet`, config);

  return promise;
}

async function deleteRegistry(id, token) {
  const config = createConfig(token);

  const promise = await axios.delete(`${BASE_URL}/registry/${id}`, config);

  return promise;
}

async function editRegistry(id, body, token) {
  const config = createConfig(token);

  const promise = await axios.put(`${BASE_URL}/registry/${id}`, body, config);

  return promise;
}

async function postRegistry(body, token) {
  const config = createConfig(token);

  const promise = await axios.post(`${BASE_URL}/registry`, body, config);

  return promise;
}


const api = {
  login,
  signUp,
  getRegistries,
  deleteRegistry,
  postRegistry,
  editRegistry,
}

export default api;