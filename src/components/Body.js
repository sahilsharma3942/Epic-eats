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
        <>  
            <div  className="search-container">
                <input type="text" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} ></input>
                <button className="search-btn" onClick={handleSearch}>search</button>
            </div>
            {filteredRestaurant.length==0?<h1>no match found</h1>:
                <div className="restaurant-list">
                {filteredRestaurant.map((restaurant)=>{
                    return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info}/></Link>
                })}
                </div>
            }
            
        </>
    )
}


export default Body;