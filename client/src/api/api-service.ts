/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios, { ResponseType } from 'axios';

export class ApiService {
  readonly _provider = axios.create({
    withCredentials: true,
  });

  get<T>(
    endpoint: string,
    params?: { [x: string]: unknown },
    responseType: ResponseType = 'json',
  ) {
    return this._provider!.get<T>(endpoint, {
      params,
      responseType,
    });
  }

  baseURL(baseURL: string) {
    this._provider.defaults.baseURL = baseURL;
    return this;
  }
}
