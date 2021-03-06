
import './App.css';
import { Home } from './components/Home';
import  {About} from './components/About';
import  {Contact} from './components/Contact';
import  {Navbar} from './components/Navbar';
import  {Products} from './components/Products';
import  {UserList} from './components/UserList';
import  {UserPage} from './components/UserPage';
import {Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />}> </Route>

        <Route path="/about" element={<About />}> </Route>

        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/product/:id" element={<Products />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
        <Route path="/userpage/:id" element={<UserPage />}></Route>


      </Routes>
     
    </div>
  );
}

export default App;
