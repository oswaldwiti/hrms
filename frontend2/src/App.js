import axios from 'axios';
import './App.css';
import Home from './Component/Home';
import { Login } from './Component/Login';
import Register from './Component/Register';
import "./Component/style.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import data from './ContextApi';
import { useState } from 'react';
import CreateEmp from './Component/CreateEmp';
import UpdateEmp from './Component/UpdateEmp';
import Emps from './Component/Emps';
function App() {
  const [userdata,setUserData] = useState({})
  const [emps, setEmps] = useState([]);
  

  const getEmp = ()=>{
    axios
    .get("http://localhost:8080/employee")
    .then((result) => setEmps(result.data))
    .catch((err) => console.log(err));
  }

  return (
    <div className="p-0">
      <data.Provider value={{userdata,setUserData}}>
        <Router>
          <Routes>
            <Route path="/"
              element={userdata && userdata._id ? <Emps getEmp={getEmp} emps={emps} /> : <Login/>}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/emp/create" element={<CreateEmp />}></Route>
          <Route path="/emp/update/:id" element={<UpdateEmp getEmp={getEmp} emps={emps} />}></Route>
          </Routes>
        </Router>
      </data.Provider>

    </div>
  );
}

export default App;
