import { ADDED } from "./actionTypes";
import { initialState } from "./initialState";


const blogReducer = (state=initialState, action)=>{
   switch (action.type) {
      case ADDED:
        return {
          ...state,
          blogs: [...state.blogs, action.payload],
        };
      //   return {
      //     ...state,
      //     blogs: state.blogs.map((blog) => {
      //       if (blog.id === action.payload.id) {
      //         return action.payload;
      //       } else {
      //         return blog;
      //       }
      //     }),
      //   };
      default:
        return state;
    }
}
export default blogReducer;