import { useState, useEffect, createContext } from "react";

export const MentorContext = createContext();

export const MentorProvider = (props) => {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((data) => data.json())
      .then((res) => {
        setmentor(res);
      });
  }, []);

  const setmentor = (mentor) => {
    console.log(mentor);
    setMentor(mentor);
  };

  return (
    <MentorContext.Provider value={{ mentor, setmentor }}>
      {props.children}
    </MentorContext.Provider>
  );
};
