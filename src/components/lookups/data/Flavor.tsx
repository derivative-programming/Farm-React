import * as PacUserFlavorListService from "../services/Flavor";

export const getFlavors= () => {
    let items:PacUserFlavorListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:PacUserFlavorListService.ResponseFull  = await PacUserFlavorListService.submitRequest();

        if(response && response.data)
        {
            const data:PacUserFlavorListService.QueryResult = response.data;
            items = data.items;
        }
    }

    getItems();

    return items;
};

