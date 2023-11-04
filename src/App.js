import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/book" Component={AddBook} />
    </Routes>
  );
}

export default App;
