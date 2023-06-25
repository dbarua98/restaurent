import RestrauntCard from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const {user,setUser} = useContext(UserContext);

  useEffect(()=>{
getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7366762&lng=75.88316830000001&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
    const json = await data.json();
    console.log(json)
    setAllRestaurants(json?.data?.cards)
    setFilterRestaurants(json?.data?.cards)
    
  }

  const isOnline = useOnline();

  if (!isOnline){
    return <h1>Please check your Internet Connection</h1>
  }

  if (!allRestaurants) return null;

  // if (filterRestaurants?.length==0)
  //     return <h1>No Restaurant match your Filter</h1>


  return (filterRestaurants.length === 0)? <Shimmer/> :(
    <div>
      <div className=" bg-pink-50 ">
        <input
          type="text"
          className="focus: bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-2  bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={e=>setUser({
          name:e.target.value,
          email:"newemail",
        })}></input>
      </div>
      <div className="flex flex-wrap relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 ">
        {filterRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+ restaurant.data.data.id}
            ><RestrauntCard
              {...restaurant.data.data}
              key={restaurant.data.data.id}
            /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
