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
      <Route path="/*" element={<h1>Page Not Found</h1>}/>
    </Routes>
    </div>
  )
}
export default App
