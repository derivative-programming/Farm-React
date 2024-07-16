import * as PacUserDynaFlowTypeListService from "../services/DynaFlowType";

export const getDynaFlowTypes= () => {
    let items:PacUserDynaFlowTypeListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:PacUserDynaFlowTypeListService.ResponseFull  = await PacUserDynaFlowTypeListService.submitRequest();

        if(response && response.data)
        {
            const data:PacUserDynaFlowTypeListService.QueryResult = response.data;
            items = data.items;
        }
    }

    getItems();

    return items;
};

