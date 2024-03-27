import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = ()=>{
    const {id} = useParams();
    const restaurant = useRestaurant(id);
    

    return (!restaurant?<Shimmer/>:
        <div className="menu">
            <h1>Restuarant id :{id}</h1>
            <h2>{restaurant?.cards[0]?.card.card.info.name}</h2>
            <img src={IMG_CDN_URL+restaurant?.cards[0]?.card.card.info.cloudinaryImageId}></img>
            <h3>{restaurant?.cards[0]?.card.card.info.areaName}</h3>
            <h3>{restaurant?.cards[0]?.card.card.info.city}</h3>
            <h3>{restaurant?.cards[0]?.card.card.info.avgRating} stars</h3>
            <h3>{restaurant?.cards[0]?.card.card.info.costForTwoMessage}</h3>
        </div>
    )
}



export default RestaurantMenu;