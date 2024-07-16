import * as PacUserDynaFlowTaskTypeListService from "../services/DynaFlowTaskType";

export const getDynaFlowTaskTypes= () => {
    let items:PacUserDynaFlowTaskTypeListService.QueryResultItem[] = []

    const getItems = async() => {
        const response:PacUserDynaFlowTaskTypeListService.ResponseFull  = await PacUserDynaFlowTaskTypeListService.submitRequest();

        if(response && response.data)
        {
            const data:PacUserDynaFlowTaskTypeListService.QueryResult = response.data;
            items = data.items;
        }
    }

    getItems();

    return items;
};

