import { useEffect,useState} from "react";  
import * as PacUserLandListService from "../services/Land";

export const getLands= () => {
    let items:PacUserLandListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:any  = PacUserLandListService.submitRequest(); 

        if(response && response.data)
        {
            const data:PacUserLandListService.QueryResult = response.data;
            items = data.items;
        } 
    } 
    
    getItems();

    return items;
};

