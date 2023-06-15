import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";
import { Prov } from "./components/context/GlobalContext";
const App = () => {
  return (
    <Prov>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/note" element={<Note />}></Route>
      </Routes>
    </Prov>
  );
};

export default App;
