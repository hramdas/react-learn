import { Todos } from "./components/Todos";
import { Counter } from "./components/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes >
        <Route path='/' element={
          <div>
             <Todos /> <Counter />
          </div>
       }></Route>
      </Routes> */}
      {/* <Todos /> */}
      <Counter />
    </div>
  );
}

export default App;
