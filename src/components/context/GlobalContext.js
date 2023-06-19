import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const item = {
  Note: JSON.parse(localStorage.getItem("Note")) || [],
  Add: (e1,e2)=>{
    const local = JSON.parse(localStorage.getItem("Note")) || [];
    const Item = {
      id:new Date().getTime(),
      Name: e1,
      Note: e2,
    };
    const newNote = [...local, Item];
    localStorage.setItem("Note", JSON.stringify(newNote));
  },
  Del: (e) => {
    const Local = JSON.parse(localStorage.getItem("Note")) || [];
    const filter = Local.filter((item) => item.id != e.id);
    localStorage.setItem("Note", JSON.stringify(filter));
    return filter
  },
};


const Context = createContext();

export function Prov({ children }) {
  return <Context.Provider value={item}>{children}</Context.Provider>;
}

export const useLocal = () => useContext(Context);
