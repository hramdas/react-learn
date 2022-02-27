import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { JobsList } from "./components/JobsList";
import { Login } from "./components/Login";
import { Post } from "./components/Post";
import { PrivateRoute } from "./components/PrivateRoute";
import { PostRoute } from "./components/PostRoute";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<PrivateRoute> <JobsList /> </PrivateRoute>}></Route> */}
        <Route path="/" element={<JobsList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/post"
          element={
            <PostRoute>
              <Post />{" "}
            </PostRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
