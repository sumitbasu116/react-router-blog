import { Link, Route } from "react-router"
import { Routes } from "react-router"

function App() {

  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>

    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/about" element={<h1>About Page</h1>}/>
      <Route path="/login" element={<h1>Login Page</h1>}/>
    </Routes>
    </>
  )
}
export default App
