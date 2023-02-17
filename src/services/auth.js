import { 
    TAC_LOGIN, 
    TAC_REGISTER,
 } from "../apiConfig/apiEndpoints";
import { apiCall } from "../apiConfig/apiCall";
 
export const tacRegisterService = (data) => {
    return apiCall({
        url: TAC_REGISTER,
        method: "post",
        data,
    });
}; 