import axios from "axios";

axios.defaults.baseURL = `https://api.apilayer.com/exchangerates_data`;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getSymbols = () => {
  return axios.get(`/symbols?apikey=${API_KEY}`);
  // return axios.get(``);
};

export const getDate = (date: string, base: string) => {
  return axios.get(`/${date}?apikey=${API_KEY}&base=${base}`);
  // return axios.get(``);
};
