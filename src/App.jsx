import { Route } from "react-router"
import { Routes } from "react-router"
import Home from "./Home"
import NavBar from "./NavBar"
import About from "./About"
import Login from "./Login"

function App() {

  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  )
}
export default App
