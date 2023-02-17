import { 
  LAND_ADD_PLANT,
  LAND_PLANT_LIST,
  PLANT_DELETE,
  PLANT_EDIT,
  PLANT_USER_DETAILS,
  PAC_FS_FARM_API_FLAVOR_LIST,
  TAC_FARM_DASHBOARD, 
} from "../apiConfig/apiEndpoints";
import { apiCall } from "../apiConfig/apiCall";
  

export const tacFarmDashboardService = () => {
  return apiCall({
    url: TAC_FARM_DASHBOARD,
    method: "get"
  });
};

export const tacFarmDashboardInitService = () => {
  return apiCall({
    url: TAC_FARM_DASHBOARD,
    method: "put"
  });
};


export const landAddPlantService = (data, landCode) => {
  return apiCall({
    url: LAND_ADD_PLANT + "/" + landCode,
    method: "post",
    data,
  });
};

export const plantDeleteService = (plantCode) => {
  return apiCall({
    url: PLANT_DELETE + "/" + plantCode,
    method: "delete"
  });
};


 
export const pacUserFlavorListService = () => {
  return apiCall({
    url: PAC_FS_FARM_API_FLAVOR_LIST,
    method: "get"
  });
};


export const landPlantListService = (data, landCode) => {
  return apiCall({
    url: LAND_PLANT_LIST + "/" + landCode,
    method: "get",
    params: data
  });
};


export const plantUserDetailsService = (plantCode) => {
  return apiCall({
    url: PLANT_USER_DETAILS + "/" + plantCode,
    method: "get"
  });
};


export const plantEditService = (data, plantCode) => {
  return apiCall({
    url: PLANT_EDIT + "/" + plantCode,
    method: "post",
    data,
  });
};