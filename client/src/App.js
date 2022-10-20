import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
// import App from './App'
import Home from "./Components/Home";
import Signup from './Components/Signup'
import Login from './Components/Login'
import MiniDrawer from './Components/Drawer'
import LoginForm from './Components/LoginForm'
import Invoices from './Components/Invoices'
import Payment from './Components/Payment'
import Expenses from './Components/Expenses'
import Tenant from './Components/Tenants'
import Property from './Components/Property'
import Utilties from './Components/Utilties'
import Maintenance from './Components/Maintenance'
import BasicButtons from './Components/Dasboard'
import Dashboard from "@mui/icons-material/Dashboard";

export default function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
      }, []);
    
      if (user) {
        console.log("Nice and easy");

            // console.log(user)
        // return <h2>Welcome, {user.username}!</h2>;
      } else {
        console.log("We have a problem");
        // return <Login onLogin={setUser} />;
      }

    // useEffect(() => {
    //     fetch("http://localhost:3000/me")
    //         .then((response) => {
    //             if (response.ok) {
    //                 response.json().then((user) => setUser(user),
    //                     console.log(user))
    //             }

    //         })
    // },

    //     []);

    // if (!user) return <Login onLogin={setUser} />


    return (
        <div>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/login" element={<Login onLogin={setUser} />} />
                <Route exact path="/signup" element={<Signup onLogin={setUser} />} />
                <Route exact path="/dashboard" element={<Home/>} />
                <Route exact path="/invoices" element={<Invoices />} />
                <Route exact path="/payment" element={<Payment />} />
                <Route exact path="/expenses" element={<Expenses />} />
                <Route exact path="/tenant" element={<Tenant />} />
                <Route exact path="/property" element={<Property />} />
                <Route exact path="/utilities" element={<Utilties />} />
                <Route exact path="/maintenance" element={<Maintenance />} />
            </Routes>
        </div>
    )
}
