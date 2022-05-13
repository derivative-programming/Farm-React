import { instance } from ".";

export const baseApiCall = (config) => {
  return new Promise((resolve, reject) => {
    instance(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
