import { useEffect,useState} from "react";  
import * as PacUserTacListService from "../services/Tac";

export const getTacs= () => {
    let items:PacUserTacListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:any  = PacUserTacListService.submitRequest(); 

        if(response && response.data)
        {
            const data:PacUserTacListService.QueryResult = response.data;
            items = data.items;
        } 
    } 
    
    getItems();

    return items;
};

