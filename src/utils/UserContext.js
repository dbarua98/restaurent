import { createContext } from "react";

const UserContext =createContext({
    user:{
        name:"DummyName",
        email:"dummy@gmail.com"
    },
})

export default UserContext;