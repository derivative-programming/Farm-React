import { apiInstance } from ".";

export const apiCall = (requestConfig) => {
  return new Promise((resolve, reject) => {
    apiInstance(requestConfig)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
