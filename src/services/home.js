import {
  ADD_PLANTS,
  GET_FLAVORS,
  PLANTS_LIST,
} from "../apiConfig/apiEndpoints";
import { baseApiCall } from "../apiConfig/baseApiCall";

export const plantsList = (data) => {
  return baseApiCall({
    url: PLANTS_LIST,
    method: "get",
    params: data
  });
};

export const plantsDetail = (id) => {
  return baseApiCall({
    url: PLANTS_LIST + "/" + id,
    method: "get"
  });
};

export const deletePlant = (id) => {
  return baseApiCall({
    url: PLANTS_LIST + "/" + id,
    method: "delete"
  });
};

export const getFlavors = (data) => {
  return baseApiCall({
    url: GET_FLAVORS,
    method: "get",
    data,
  });
};

export const addPlantApi = (data) => {
  return baseApiCall({
    url: ADD_PLANTS,
    method: "post",
    data,
  });
};

export const updatePlantApi = (data, id) => {
  return baseApiCall({
    url: ADD_PLANTS + "/" + id,
    method: "put",
    data,
  });
};
