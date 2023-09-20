import { useEffect,useState} from "react";  
import * as PacUserDateGreaterThanFilterListService from "../services/DateGreaterThanFilter";

export const getDateGreaterThanFilters= () => {
    let items:PacUserDateGreaterThanFilterListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:any  = PacUserDateGreaterThanFilterListService.submitRequest(); 

        if(response && response.data)
        {
            const data:PacUserDateGreaterThanFilterListService.QueryResult = response.data;
            items = data.items;
        } 
    } 
    
    getItems();

    return items;
};

