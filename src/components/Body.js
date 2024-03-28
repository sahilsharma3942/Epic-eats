import { useEffect, useState } from "react";
import RestaurantCard from "./ResraurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useAllRestaurants from "../utils/useAllRestaurants";

const Body = ()=>{
    //let stext ="KFC"
    
    const [searchText, setSearchText] = useState("KFC");
    const allRestaurant =useAllRestaurants();
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    
    const handleSearch = ()=>{
        const data = filterData(searchText,allRestaurant);
        setFilteredRestaurant(data);
    }
    useEffect(() => {
        setFilteredRestaurant(allRestaurant); // Update filteredRestaurant when allRestaurant changes
    }, [allRestaurant]);

    return (allRestaurant.length==0?<Shimmer />:
        <div className="px-24 bg-slate-100">  
            <div  className="p-5 ">
                <input  className="p-1 m-2 rounded-sm bg-slate-300 border-2 rounded-lg focus:scale-110 focus:bg-slate-400" type="text" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} ></input>
                <button className=" bg-slate-600 text-white m-2 p-1 rounded-md hover:bg-slate-800 hover:scale-110" onClick={handleSearch}>search</button>
            </div>
            {filteredRestaurant.length==0?<h1>no match found</h1>:
                <div className=" flex flex-wrap ">
                {filteredRestaurant.map((restaurant)=>{
                    return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info}/></Link>
                })}
                </div>
            }
            
        </div>
    )
}


export default Body;