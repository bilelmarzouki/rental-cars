
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import {BrowserRouter, Redirect, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import Home from './pages/Home';
import 'antd/dist/antd.min.css'; 
import UserBooking from './pages/UserBooking';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
function App() { 
  return (
    <div className="App">
      
       <BrowserRouter>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/booking/:carid' exact component={BookingCar}/>
          <Route path='/userbookings' exact component={UserBooking}/>
          <Route path='/addcar' exact component={AddCar}/>
          <Route path='/admin' exact component={AdminHome}/>
          <Route path='/editcar/:carid' exact component={EditCar}/>
       </BrowserRouter>
           
      
    </div>
  );
}


export default App;

//export function ProtectedRoute(props) {
  //if (localStorage.getItem("userInfo")) {
   // return <Route {...props} />;
  //} else {
   // return <Redirect to="/login" />;
//}
//}




