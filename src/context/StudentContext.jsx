import React, { useState } from "react";

const StudentContext = React.createContext();

export const StudentProvider = ({ children }) => {
  let [state, setState] = useState([
    {
      id:1,
      name: "Naishadh Chawra",
      age: 23,
      course: "MERN",
      batch: "October",
    },
    {
      id:2,
      name: "Vidhi Chawra",
      age: 25,
      course: "MERN",
      batch: "October",
    },
    {
      id:3,
      name: "John Doe",
      age: 33,
      course: "MERN",
      batch: "September",
    },
    {
      id:4,
      name: "Sasha Grey",
      age: 27,
      course: "MEAN",
      batch: "September",
    },
    {
      id:5,
      name: "Tori Black",
      age: 30,
      course: "MERN",
      batch: "October",
    },
  ]);

  return (
    <StudentContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
