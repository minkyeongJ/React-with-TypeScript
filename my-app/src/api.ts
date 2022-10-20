import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export function axiosCoins() {
  return axios.get(`${BASE_URL}/coins`).then((response) => response.data);
}
export function axiosCoinInfo(coinId: string) {
  return axios.get(`${BASE_URL}/coins/${coinId}`).then((response) => response.data);
}
export function axiosCoinTickers(coinId: string) {
  return axios
    .get(`${BASE_URL}/tickers/${coinId}`)
    .then((response) => response.data);
}
