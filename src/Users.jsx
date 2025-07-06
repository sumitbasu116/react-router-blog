import { Outlet } from "react-router"
import { Link } from "react-router"

function Users() {

    const userData = [
        {id:1,name:'Anil'},
        {id:2,name:'Sumit'},
        {id:3,name:'Samhita'},
        {id:4,name:'Amit'},
        {id:5,name:'Aditri'},
        {id:6,name:'Dipti'}
    ]

  return (
    <div style={{marginLeft:20}}>
    <h1>Users List Page</h1>
    {
        userData.map(
            (item,index)=>(
                <Link key={index} to={"/users/"+item.id+"/name/"+item.name}><h4 key={index}>{item.name}</h4></Link>
            )
        )
    }
    </div>
  )
}
export default Users
