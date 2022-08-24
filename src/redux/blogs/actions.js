import { ADDED } from "./actionTypes"


export const added = (blog)=>{
    return{
        type:ADDED,
        payload:{
            ...blog,
            
        }
    }
    
}
// export const filterByName = (name,id)=>{
//     return{
//         type:FILTERBYNAME,
//         payload:{
//            name,
//            id
//         }
//     }
    
// }
// export const filterByCategory = (category,id)=>{
//     return{
//         type:FILTERBYCATEGORY,
//         payload:{
//             category,
//            id
//         }
//     }
    
// }

