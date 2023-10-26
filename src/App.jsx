import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/home/Homepage";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import { useContext } from "react";
;

function App() {

  const {user} = useContext(Context);

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Setting /> : <Login />} />
      </Routes>
    </Router>
  )
}

export default App
