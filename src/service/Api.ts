import axios from 'axios';

axios.defaults.baseURL = `https://api.apilayer.com/exchangerates_data`;
// const API_KEY = 'NzJxoBDal3rMXth209xmrMTkbPzOx80p';
// const API_KEY = "XowlC03WZL1HPpBbKWxlq6BPqSh5kw7k";//Славик
// const API_KEY = "5zw4tN3IC7H4U5Mo2SAlQWnVzjRSveCc"
// const headers = { apikey: API_KEY };


export const getSymbols =() => {
  // return axios.get(
  //   `/symbols?apikey=${API_KEY}`
  // );
  return axios.get(``);
};

export const getDate = (date:string, base:string) => {
  // return axios.get(`/${date}?apikey=${API_KEY}&base=${base}`);
  return axios.get(``);
};
