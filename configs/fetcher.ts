import axios from 'axios';


const fetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    timeZone: 'Asia/Jakarta',
  },
});

fetcher.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem('chatId');
    }
    if (error?.response?.status === 503) {
      // redirect maintenance page
      window.location.replace(`${window.location.origin}/maintenance`);
    }
    return Promise.reject(error);
  }
);

export { fetcher };
