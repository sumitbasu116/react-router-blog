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
    <div>
    <h1>Users List Page</h1>
    {
        userData.map(
            (item,index)=>(
                <h2 key={index}>{item.name}</h2>
            )
        )
    }
    </div>
  )
}
export default Users
