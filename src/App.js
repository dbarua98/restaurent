import React, { useState } from 'react'
import Header from './components/Header'; 
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/Store';


 



const App = () => {
 const [user,setUser]= useState({
  name:"Developer",
  email:"developer@gmail.com",
 }) ;
  return (
    <Provider store={store}>
       <UserContext.Provider value={{
        user:user,
        setUser:setUser,
       }}>
      <Header /> 
     <Outlet/>
      <Footer/>
      
    </UserContext.Provider>
    </Provider>
  )
}




export default App


