import {  FILTERCATEGORY, FILTERNAME, FILTERSEARCH } from "./filterActionTypes";
import { initialState } from "./initialState";

const blogFilterReducer = (state=initialState, action)=>{
    switch (action.type) {
        case FILTERCATEGORY:
            return{
                ...state,
                category: action.payload.category
            }
        case FILTERNAME:
            return{
                ...state,
                name: action.payload.name
            }
        
        case FILTERSEARCH:
            return{
                ...state,
                search: action.payload.search
            }
        
    
        default:
            return state
    }

}

export default blogFilterReducer;