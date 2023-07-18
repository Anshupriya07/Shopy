import React,{ useState} from "react";
import UserContext from './UserContext';
export const UserState = (props) => {
    const [Users, setUsers] = useState([]);
    console.log(props)
    return(
        <UserContext.Provider value = {{Users,setUsers}}>
            {props.children}
        </UserContext.Provider>
    )
}