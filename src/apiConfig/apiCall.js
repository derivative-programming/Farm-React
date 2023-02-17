import { apiInstance } from ".";

export const apiCall = (config) => {
  return new Promise((resolve, reject) => {
    apiInstance(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
