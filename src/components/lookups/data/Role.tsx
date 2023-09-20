import { useEffect,useState} from "react";  
import * as PacUserRoleListService from "../services/Role";

export const getRoles= () => {
    let items:PacUserRoleListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:any  = PacUserRoleListService.submitRequest(); 

        if(response && response.data)
        {
            const data:PacUserRoleListService.QueryResult = response.data;
            items = data.items;
        } 
    } 
    
    getItems();

    return items;
};

