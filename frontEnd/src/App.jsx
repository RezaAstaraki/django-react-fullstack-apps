import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
