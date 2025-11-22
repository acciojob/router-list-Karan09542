import React from "react";
import "./../styles/App.css";
import { Route, Routes } from "react-router-dom";
import ListItem from "./ListItem";
import ItemDetails from "./ItemDetail";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Routes>
        <Route path="/" element={<ListItem />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
};

export default App;
