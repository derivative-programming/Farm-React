import { LOGIN, REGISTER } from "../apiConfig/apiEndpoints";
import { baseApiCall } from "../apiConfig/baseApiCall";

export const login = (data) => {
    return baseApiCall({
        url: LOGIN,
        method: "post",
        data,
    });
};

export const register = (data) => {
    return baseApiCall({
        url: REGISTER,
        method: "post",
        data,
    });
};