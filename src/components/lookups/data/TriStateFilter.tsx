import { useEffect,useState} from "react";  
import * as PacUserTriStateFilterListService from "../services/TriStateFilter";

export const getTriStateFilters= () => {
    let items:PacUserTriStateFilterListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:any  = PacUserTriStateFilterListService.submitRequest(); 

        if(response && response.data)
        {
            const data:PacUserTriStateFilterListService.QueryResult = response.data;
            items = data.items;
        } 
    } 
    
    getItems();

    return items;
};

