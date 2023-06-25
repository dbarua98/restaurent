import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
  const { resid } = useParams();
  
  const [restaurant, menuItems] = useRestaurant ( resid);

  const dispatch = useDispatch();

  const addFoodItem = (item)=>{
    dispatch(addItem(item));
  }
 
 
return !restaurant ? (<Shimmer/>):(
    <div className="flex container max-w-full columns-2  p-16 space-x-6  mt-24 bg-gray-900 text-gray-100">
      <div className="float-left space-y-1 w-full "  >
        <h1>Restaurant id :{resid}</h1>
        <h1 className="text-4xl font-semibold  ">{restaurant.name}</h1>
        <img className="w-96 rounded-md" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
      </div>
      
      <div className="flex flex-wrap space-y-2 justify-center items-center w-full  ">
      
        {menuItems.map((item) => (
          <div className="flex  p-2 m-2 space-x-2 w-56  rounded-lg justify-between " key={item?.id}>
            <div>
              <h3 className="flex flex-col">{item?.name}</h3>
              <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+item?.imageId}/>
              <p className="font-medium ">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
              <p className="font-thin">{item?.description}</p>
              <button className="p-1 bg-green-100" onClick={()=>addFoodItem(item)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
