// import React, { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom'
// import App from './App'
// import Signup from './Components/Signup'
// import LoginForm from './Components/Login'
// import Login from './Components/LoginForm'
// import Invoices from './Components/Invoices'
// import Payment from './Components/Payment'
// import Expenses from './Components/Expenses'
// import Tenant from './Components/Tenants'
// import Property from './Components/Property'
// import Utilties from './Components/Utilties'
// import Maintenance from './Components/Maintenance'

// function Handler() {
//     const [ currentUser, setCurrentUser ] = useState(null);
//     const [ users, setUsers ] = useState([]);


//     return (
//         <div>
//             <Routes>
//                 <Route exact path="/" element={
//                     <Login setCurrentUser={setCurrentUser} />
//                 } />
//                 <Route path="/signup" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<Signup />} />
//                 <Route path="/dashboard" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<App />} />
//                 <Route path="/invoices" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<Invoices />} />
//                 <Route path="/payment" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<Payment />} />
//                 <Route path="/expenses" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<Expenses />} />
//                 <Route path="/tenant" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<Tenant />} />
//                 <Route path="/property" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<Property />} />
//                 <Route path="/utilities" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<Utilties />} />
//                 <Route path="/maintenance" currentUser={currentUser} setCurrentUser={setCurrentUser} element={<Maintenance />} />




//             </Routes>
//         </div>
//     )
// }
// export default Handler