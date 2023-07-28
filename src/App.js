import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Componant/Layout";
import Home from "./Componant/Home";
import React from "react";
import Create from "./Componant/Create";
import MyProfile from "./Componant/MyProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Route>
  )
);



function App() {
  return (

<RouterProvider router={router} />

         
  
  );
}

export default App;
