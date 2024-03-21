import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import Login from "./pages/login/Login";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route element={<BaseLayout />}> */}
          <Route index element={<Home />} />
          <Route element={<Login />} path="login" />
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
