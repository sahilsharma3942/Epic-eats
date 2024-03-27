import { useState, useEffect } from "react";

const useAllRestaurants = ()=>{
    const [allRestaurant , setAllRestaurant] = useState([]);

    useEffect(()=>{
        getRestaurants();
    },[])

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //setFilteredRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    }

    return allRestaurant;
}

export default useAllRestaurants;