import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";






const Title = () => (

    <a href='/'>
   <img className="h-28 p-2" alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4alOadojaZDzMknsUICwBJwm9mtZAqGzieg&usqp=CAU"/>
  </a>
  );


  const Header = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false);

const isOnline = useOnline();

const {user} = useContext(UserContext);

const cartItems = useSelector(store=>store.cart.items)

    return (
      <div className="flex justify-between bg-pink-50 shadow-lg ">
        <Title /> 
        <div className="nav-items">
          <ul className="flex py-20">
            <Link to="/"><li className="px-2">Home</li></Link>
            <Link to="/about"><li className="px-2">About</li></Link>
            <Link to="/Contact"><li className="px-2">Contact</li></Link>
            <Link to="/instamart"><li className="px-2">Instamart</li></Link>
            <Link to="/cart" className="px-2">Cart- {cartItems.length} items</Link>
          </ul>
        </div>
        <span>{isOnline?"✅":"🔴"}</span>
      <h1 className="p-10 font-bold text-red-900" >  {user.name}</h1>
        {
          (isLoggedIn?(<button onClick={()=>setIsLoggedIn(false)}>Logout</button>):( <button onClick={()=>setIsLoggedIn(true)}>Login</button>))
        }
        
        
      </div>
    );
  };

export default Header;