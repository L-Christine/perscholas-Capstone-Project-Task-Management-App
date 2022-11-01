import {Link} from 'react-router-dom'
import * as userService from '../utilities/users-service'
import { setUser } from '../App'

export default function NavBar({user}) {
    function handleLogOut() {
        //delegate to the users-service
        userService.logOut()
        //update state cause a re-render
        setUser(null)
    }
    return(
        <nav>
            <Link to='/orders'>Order History</Link> 
            &nbsp; | &nbsp;
            <Link to='/orders/new'>New Order</Link>
            &nbsp;&nbsp;<span>Welcome, {user}</span>
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}