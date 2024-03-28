import { IMG_CDN_URL } from "../config";

const RestaurantCard =  ({name,cloudinaryImageId,avgRating,cuisines})=>{
    return <div className=" w-52 m-5 p-2 shadow-sm rounded-lg bg-slate-200 hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:bg-slate-300">
        <img className=" rounded-lg" src={IMG_CDN_URL+cloudinaryImageId}></img>
        <h2 className="font-bold text-lg">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        
    </div>
}

export default RestaurantCard