import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cat-informed-newt.ngrok-free.app',
});
export default instance;
