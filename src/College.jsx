import { NavLink } from "react-router"
import { Link } from "react-router"

function College() {

  return (
    <div className="college" style={{textAlign:'center'}}>
    <h1>College Page</h1>
    <NavLink className="link" to="/student">Student</NavLink>
    <NavLink className="link" to="/department">Department</NavLink>
    <NavLink className="link" to="/details">Details</NavLink>
    </div>
  )
}
export default College
