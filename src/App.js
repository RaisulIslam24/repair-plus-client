import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login/Login';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import AddService from './components/Admin/AddService/AddService';
import Admin from './components/Admin/Admin/Admin';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Order from './components/Admin/Order/Order';
import OrderList from './components/Admin/OrderList/OrderList';
import AddReview from './components/Admin/AddReview/AddReview';
import AdminOrderList from './components/Admin/AdminOrderList/AdminOrderList';
import ManageServices from './components/Admin/ManageServices/ManageServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/order/:id">
            <Order />
          </PrivateRoute>
          <Route path="/review">
            <AddReview></AddReview>
          </Route>
          <Route path="/AdminOrderList">
            <AdminOrderList></AdminOrderList>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/orderList">
            <orderList></orderList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;