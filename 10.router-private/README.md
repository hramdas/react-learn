## Private Routing

 * file : src\components\PrivateRoute.jsx
```ruby
import {useContext} from 'react'
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) =>{
    const {token} =  useContext(AuthContext);
    //if not logged in show login page
    if(!token){
        return <Navigate to={"/login"} />
    }
    return children  //if logedin
}
```


* file : src\App.js
```ruby
import './App.css';
import { Home } from './components/Home';
import  {Navbar} from './components/Navbar';
import  {UserList} from './components/UserList';
import  {Login} from './components/Login';
import  {UserPage} from './components/UserPage';
import {Route, Routes } from 'react-router-dom'

import {PrivateRoute} from './components/PrivateRoute'   //Private route component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
      //Public route
        <Route path="/" element={<Home />}> </Route>
        <Route path="/login" element={<Login />}></Route>

        //Private Route
        <Route path="/userlist" element={ <PrivateRoute> <UserList /> </PrivateRoute>}></Route>
        <Route path="/userpage/:id" element={ <PrivateRoute> <UserPage /> </PrivateRoute> }></Route>

      </Routes>
     
    </div>
  );
}

export default App;
```


## related repo
* Context Api : https://github.com/hramdas/react-learn/tree/master/8-1-AuthContext
* Routing : https://github.com/hramdas/react-learn/tree/master/9-1.router
