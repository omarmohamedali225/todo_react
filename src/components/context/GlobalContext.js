import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const item = {
  Note: JSON.parse(localStorage.getItem("Note")) || [],
  Del: (e) => {
    const Local = JSON.parse(localStorage.getItem("Note")) || [];
    const filter = Local.filter((item) => item.id != e.id);
    localStorage.setItem("Note", JSON.stringify(filter));
  },
};


const Context = createContext();

export function Prov({ children }) {
  return <Context.Provider value={item}>{children}</Context.Provider>;
}

export const useLocal = () => useContext(Context);
