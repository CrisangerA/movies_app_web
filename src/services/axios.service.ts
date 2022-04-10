/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable class-methods-use-this */
import axios, { AxiosResponse, AxiosError } from 'axios';
import MOVIES_API from '@modules/shared/api.routes';

class AxiosService {
  API_KEY = 'bdeeba2f37e3b915bba65a658be1b1d9';

  getRoute = (route: string) => `${MOVIES_API.root}${route}?api_key=${this.API_KEY}`;

  headers = () => ({
    'content-type': 'application/json',
    Accept: 'application/json',
  });

  successCallback = (resolve: Function) => (response: AxiosResponse) => {
    resolve(response.data ?? response);
  };

  rejectCallback = (reject: Function) => (err: AxiosError) => {
    // console.log("_rejectCallback: ",err)
    const error = { message: '' };
    if (err.response?.status === 400) error.message = 'Error connecting to server';
    if (err.response?.status === 401) error.message = 'Unauthorized';
    if (err.response?.status === 403) error.message = 'Forbiden';
    if (err.response?.status === 500) error.message = 'Internal server error';
    if (typeof err.response?.data === 'string' && err.response.data !== '') error.message = err.response.data;

    if (typeof err.response?.data?.message === 'string' && err.response.data.message !== '') {
      error.message = err.response.data.message;
    }

    if (typeof err === 'string') error.message = err;
    reject(error);
  };

  get<T>(route: string): Promise<T> {
    return new Promise((resolve, reject) =>
      axios
        .get(this.getRoute(route), { headers: this.headers() })
        .then(this.successCallback(resolve), this.rejectCallback(reject))
    );
  }

  post = (route: string, body: unknown) =>
    new Promise((resolve, reject) =>
      axios
        .post(this.getRoute(route), body, { headers: this.headers() })
        .then(this.successCallback(resolve), this.rejectCallback(reject))
    );

  put = (route: string, body: any) =>
    new Promise((resolve, reject) =>
      axios
        .put(this.getRoute(route), body, { headers: this.headers() })
        .then(this.successCallback(resolve), this.rejectCallback(reject))
    );

  delete = (route: string) =>
    new Promise((resolve, reject) =>
      axios
        .delete(this.getRoute(route), { headers: this.headers() })
        .then(this.successCallback(resolve), this.rejectCallback(reject))
    );
}

const axiosService = new AxiosService();
export default axiosService;
