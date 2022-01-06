import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Product } from './components/Product'
import { ProductsList } from './components/ProductsList'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<ProductsList />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
