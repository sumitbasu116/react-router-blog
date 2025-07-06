import { Outlet } from "react-router"
import { NavLink } from "react-router"
import { Link } from "react-router"

function College() {

  return (
    <div className="college" style={{textAlign:'center'}}>
    <Link to="/">Go Back To Home</Link>
    <h1>College Page</h1>
    <Link className="link" to="">Student</Link>
    <Link className="link" to="department">Department</Link>
    <Link className="link" to="details">Details</Link>
    <Outlet/>
    </div>
  )
}
export default College
