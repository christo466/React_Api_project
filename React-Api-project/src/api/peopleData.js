import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  });

export const getPEOPLEDATA = () => {
    return instance.get('users').then(
      (res) => {
        // console.log(res)
        return res;
      },
      (error) => {
        console.log(error, "Error !!!");
      },
    );
  };


