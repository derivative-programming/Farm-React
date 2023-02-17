import { useEffect,useState} from "react";  
import {  
    PAC_FS_FARM_API_FLAVOR_LIST, 
  } from "../../../apiConfig/apiEndpoints"; 
import * as PacUserFlavorListService from "../services/PacUserFlavorList";

export const getFlavors= () => {
    const [flavors, setFlavors] = useState<PacUserFlavorListService.QueryResultItem[]>([])

    const fetchFlavors = async() => {
        const response:any  = PacUserFlavorListService.submitRequest(); 

        if(response && response.data)
        {
            const data:PacUserFlavorListService.QueryResult = response.data;
            setFlavors(data.items);
        } 
    } 
    
    useEffect(() => {
        fetchFlavors();
    },[]);

    return flavors;
};

