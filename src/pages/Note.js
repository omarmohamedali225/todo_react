import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useLocal } from "../components/context/GlobalContext";

const Note = () => {
  const { Note } = useLocal();
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
          <Card />
      </div>
    </div>
  );
};

export default Note;
