import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Verify from "./Pages/Verify";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className=" min-h-screen">
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/forgot" element={<Forgot></Forgot>}></Route>
        <Route path="/verify" element={<Verify></Verify>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
