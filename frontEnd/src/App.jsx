import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Login />} path="login" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
