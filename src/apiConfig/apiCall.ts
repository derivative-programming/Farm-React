import { AxiosRequestConfig, AxiosResponse } from "axios";
import { apiInstance } from ".";

export const apiCall = (requestConfig: AxiosRequestConfig): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    apiInstance(requestConfig)
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};