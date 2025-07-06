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

function App() {

  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<Navigate to="/login"/>}/>
      <Route path="/college" element={<College/>}>
        <Route path="student" element={<Student/>}/>
        <Route path="details" element={<Details/>}/>
        <Route path="department" element={<Department/>}/>
      </Route>
    </Routes>
    </div>
  )
}
export default App
