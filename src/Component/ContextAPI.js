import React, { useState, createContext } from "react";
export const ContextAPI = createContext();

export const StudentData = (props) => {
  const [rows, setRows] = useState([
    { id: "1", name: "John", age: 26, course: "MERN", batch: "October"},
    { id: "2", name: "Doe", age: 23, course: "MERN", batch: "November"},
    { id: "3", name: "Biden", age: 26, course: "MERN", batch: "October"},
    { id: "4", name: "Barar", age: 30, course: "MERN", batch: "November"},
    { id: "5", name: "Christ", age: 36, course: "MERN", batch: "October"},
    { id: "6", name: "Elent", age: 36, course: "MERN", batch: "November"},
    { id: "7", name: "Harshita", age: 25, course: "MERN", batch: "June"},
  ]);
  return (
    <ContextAPI.Provider value={[rows, setRows]}>
      {props.children}
    </ContextAPI.Provider>
  );
};
