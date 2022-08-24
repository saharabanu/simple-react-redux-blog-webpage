import { combineReducers } from "redux";
import blogReducer from "./blogs/blogReducer";
import blogFilterReducer from "./filters/blogFilterReducer";


const rootReducer = combineReducers({
    blogs: blogReducer,
    filters:blogFilterReducer
})
export default rootReducer;