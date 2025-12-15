import axios from 'axios';

interface createInstanceOptions {
  baseURL: string;
  timeout?: number;
}

const createInstance = ({ baseURL, timeout = 5000 }: createInstanceOptions) => {
  return axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default createInstance;
