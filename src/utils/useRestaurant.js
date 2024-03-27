import { useState, useEffect } from "react";

const useRestaurant = (id)=>{
    const [restaurant, setRestaurant] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+id);
        const json = await data.json();
        //console.log();
        setRestaurant(json?.data);
        //console.log(json?.data)
    }

    return restaurant;
}


export default useRestaurant;