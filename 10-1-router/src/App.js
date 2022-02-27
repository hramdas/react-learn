import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Home} from './components/Home.jsx'
import {Login} from './components/Login.jsx'
import {Navigation} from './components/Navigation.jsx'
import {Dashboard} from './components/Pages/Dashboard.jsx'
import {Settings} from './components/Pages/Settings.jsx'
import {PrivateRoute} from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
     <Navigation />   {/* nav bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute> } />
        <Route path="/dashboard/settings" element={<PrivateRoute> <Settings /> </PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
