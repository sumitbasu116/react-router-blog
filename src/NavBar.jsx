import { NavLink } from "react-router";
import './header.css'
import { Outlet } from "react-router";
function NavBar() {

    return (
        <div>
            <div className="header">
                <div>
                    <NavLink className="link" to="/"><h2>Logo</h2></NavLink>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive})=>isActive?'link custom-active':'link'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="in/user/about" className="link">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="in/user/login" className="link">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/college" className="link">College</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className="link">Users</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
export default NavBar
