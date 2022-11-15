import { NavLink } from 'react-router-dom'
import * as userService from '../utilities/users-service'
import { FaRegUser } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlineHome, AiOutlineEdit, AiOutlineMail } from 'react-icons/ai'


export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        //delegate to the users-service
        userService.logOut()
        //update state cause a re-render
        setUser(null)
    }

    return(
        <nav className='navbar'>
            <AiOutlineHome />
            <NavLink to="/"> Home</NavLink>
            &nbsp; | &nbsp;
            <AiOutlineEdit />
            <NavLink to="/edit">Edit</NavLink>
            &nbsp; | &nbsp;
            <FaRegUser />
            <span> {user.name}</span>
            &nbsp; | &nbsp;
            <AiOutlineMail />
            <span>{user.email}</span>
            &nbsp; | &nbsp;
            <FiLogOut />
            <NavLink to="" onClick={handleLogOut}>Log Out</NavLink>
        </nav>
        
    )
}