import {Route } from "react-router"
import { Routes } from "react-router"
import NavBar from "./NavBar"

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/about" element={<h1>About Page</h1>}/>
      <Route path="/login" element={<h1>Login Page</h1>}/>
    </Routes>
    </>
  )
}
export default App
