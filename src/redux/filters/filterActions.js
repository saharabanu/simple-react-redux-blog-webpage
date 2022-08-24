import {FILTERSEARCH  ,FILTERCATEGORY,FILTERNAME } from "./filterActionTypes"

export const filerCategory = (category)=>{
   return{
    type: FILTERCATEGORY,

    payload:{
        category
    }
   }

}
export const filterName = (name)=>{
   return{
    type: FILTERNAME,
    
    payload:{
        name
    }
   }

}
export const filterBySearch = (search)=>{
   return{
    type: FILTERSEARCH,
    
    payload:{
        search
    }
   }

}


