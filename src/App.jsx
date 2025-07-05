import { Route } from "react-router"
import { Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import { Link } from "react-router"

function App() {

  return (
    <>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      
    </>
  )
}

export default App
