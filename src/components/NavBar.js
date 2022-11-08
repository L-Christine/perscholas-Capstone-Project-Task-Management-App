import { NavLink } from 'react-router-dom'
import * as userService from '../utilities/users-service'

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        //delegate to the users-service
        userService.logOut()
        //update state cause a re-render
        setUser(null)
    }

    return(
        <nav>
            <NavLink to="/main">Main</NavLink>
            &nbsp; | &nbsp;<span>Welcome, {user.name}</span>&nbsp; | &nbsp;
            <NavLink to="" onClick={handleLogOut}>Log Out</NavLink>
        </nav>
        
    )
}