import { Link } from "react-router";
import './header.css'
import { Outlet } from "react-router";
function NavBar() {

    return (
        <div>
            <div className="header">
                <div>
                    <Link className="link" to="/"><h2>Logo</h2></Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="in/user/about" className="link">About</Link>
                        </li>
                        <li>
                            <Link to="in/user/login" className="link">Login</Link>
                        </li>
                        <li>
                            <Link to="/college" className="link">College</Link>
                        </li>
                        <li>
                            <Link to="/users" className="link">Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
export default NavBar
