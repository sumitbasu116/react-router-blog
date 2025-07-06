import { Route } from "react-router"
import { Routes } from "react-router"
import Home from "./Home"
import NavBar from "./NavBar"
import About from "./About"
import Login from "./Login"
import PageNotFound from "./PageNotFound"
import { Navigate } from "react-router"

function App() {

  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/*" element={<PageNotFound/>}/> */}
      <Route path="/*" element={<Navigate to="/login"/>}/>
    </Routes>
    </div>
  )
}
export default App
