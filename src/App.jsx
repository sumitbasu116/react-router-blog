import { Route } from "react-router"
import { Routes } from "react-router"
import Home from "./Home"
import NavBar from "./NavBar"
import About from "./About"
import Login from "./Login"
import { Navigate } from "react-router"
import College from "./College"
import Student from "./Student"
import Details from "./Details"
import Department from "./Department"
import Users from "./Users"
import UserDetail from "./UserDetail"

function App() {

  return (
    <div>

      <Routes>
        <Route to="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="in">
            <Route path="/in/user">
              <Route path="/in/user/about" element={<About />} />
              <Route path="/in/user/login" element={<Login />} />
            </Route>
          </Route>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id/name/:name" element={<UserDetail/>} />
          <Route path="/users/list" element={<Users />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="details" element={<Details />} />
          <Route path="department" element={<Department />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
