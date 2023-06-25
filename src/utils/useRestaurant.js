import React from 'react'
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY,swiggy_menu_api_URL } from "../constants";
import { useState,useEffect } from 'react';

const useRestaurant = (resid) => {
    const [restaurant, setRestaurant] = useState();
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        getRestaurantInfo();
      }, []);

      var   getRestaurantInfo= async()=> {
        const data = await fetch(
          swiggy_menu_api_URL+resid
        );
        const json = await data.json();
        console.log(json);
        console.log(resid)
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurant(restaurantData);
    
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];
    
        setMenuItems(menuItemsData);
      }
      
    
  return [restaurant ,menuItems ]
  
}

export default useRestaurant;
