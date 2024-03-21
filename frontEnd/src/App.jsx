import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/home/Home";

import Login from "./pages/login/Login";
import RootLayout from "./layouts/rootLayout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route index element={<Home />} />
      <Route element={<Login />} path="login" />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
