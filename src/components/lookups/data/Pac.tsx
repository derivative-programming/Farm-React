import * as PacUserPacListService from "../services/Pac";

export const getPacs= () => {
    let items:PacUserPacListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:PacUserPacListService.ResponseFull  = await PacUserPacListService.submitRequest();

        if(response && response.data)
        {
            const data:PacUserPacListService.QueryResult = response.data;
            items = data.items;
        }
    }

    getItems();

    return items;
};

