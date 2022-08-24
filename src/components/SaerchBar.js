import React from 'react';
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from 'react-redux';
import searchImg from '../assets/search.svg';
import {filterBySearch} from '../redux/filters/filterActions'





const SaerchBar = () => {
    const {category, name, search} = useSelector((state)=>state.filters);
    const dispatch = useDispatch();
    
    
    

   

    const handleChange = (e) =>{
        e.preventDefault();
        dispatch(filterBySearch(e.target.value))

    }
    const debouncedSearch = debounce(handleChange, 1000);

   
  return (
    <>
       
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                onChange={debouncedSearch}
                placeholder="Search"
            />
            <img
                className="inline h-6 cursor-pointer"
                src={searchImg}
                alt="Search"
            />
        </div>

       
       
    </>
  )
}

export default SaerchBar