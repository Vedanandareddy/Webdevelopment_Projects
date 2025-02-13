import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, Outlet, NavLink } from "react-router-dom"
import { useState } from "react"

function Home() {
  return <h1>Home Page</h1>
}

function About() {
  return <h1>About Us</h1>
}

function Profile() {
  return <h3>User Profile</h3>
}

function Settings() {
  return <h3>Settings Page</h3>
}



function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
        {/* using  /profile takes to /profile using profile takes it current/profile */}
      </nav>
      <Outlet />   {/* Displays either Users or Reports inside Dashboard */}
      {/* Renders nested route components here  used for nested like /dashboard/profile*/}
    </div>
  )
}


function Login() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("")

  function handlechange(e) {
    setPassword(e.target.value)  // Updates state with input value
  }
  let p = "Veda5859"

  function handlelogin() {
    if (password == p) {
      navigate("/dashboard")
      // use navigate to redirect on an action without using link 
    }
    else {
      setPassword("")
      alert("wrong password")
    }
  }




  return <>
    <h1>Login</h1>
    <input type="text" name="" id="" value={password} onChange={(e) => handlechange(e)} />
    <button onClick={handlelogin}>Login</button>
  </>
}


function Userprofile() {
  let { username } = useParams();
  // get parameter form useParams function which return a parameter object containing the parameters
  return <>
    <h1> Hi,  Your Username is {username} </h1></>
}


function App() {


  return (
    <Router>
      <nav >
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
        {/*   {isActive }  instead of e.isActive   applies active class  to the current active link*/}
        <NavLink to="/user/john" className={({ isActive }) => (isActive ? "active" : "")}>john's profile </NavLink>
        <NavLink to="/user/priya" className={({ isActive }) => (isActive ? "active" : "")}>priya's profile </NavLink>

      </nav>
      {/* these stay in every route  page  chaging elements are written in routes  done without reloading as link is used , using a tag will make the page to reload  */}




      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Fix: Nest Profile and Settings inside /dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<h3>Welcome to Dashboard</h3>} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/user/:username" element={<Userprofile />} />
        {/* can be used  to handle dynamic urls here ':'  used to represent username is variable and is passed as parameter*/}
        {/* wiidcard *  handles all possible routes under this domain for example /user/* handles /user/veda/nanda/...  but /user/:path mathes only /user/veda or /user/someusername not other paths  but this extracts parameters  */}


        {/*  Route path "/user/:username*" will be treated as if it were "/user/:username/*" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "/user/:username/*". */}
      </Routes>
      {/* in Routes each route is defined 
      which contains path and the element to display on that path */}


    </Router>
  )
}

export default App
