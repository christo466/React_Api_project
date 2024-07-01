import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  });

export const getData = () => {
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


