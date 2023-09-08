import React from "react";
import AllUsers from "./Components/allUsers";
import CreateUser from "./Components/createUser";
import UpdateUser from "./Components/updateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUsers></AllUsers>}></Route>
        <Route path="/createUser" element={<CreateUser></CreateUser>}></Route>
        <Route
          path="/updateUser/:id"
          element={<UpdateUser></UpdateUser>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
