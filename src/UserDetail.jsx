import { Link } from "react-router";
import { useParams } from "react-router"

function UserDetail() {
  const paramsData = useParams();

    return (
    <div style={{marginLeft:20}}>
    <h1>Users Details Page</h1>
    <h3>User id is:{paramsData.id}</h3>
    {
        paramsData.name?<h3>User Name is:{paramsData.name}</h3>:null
    }
    
    <Link to="/users"><h4>Back</h4></Link>
    
    </div>
  )
}
export default UserDetail
