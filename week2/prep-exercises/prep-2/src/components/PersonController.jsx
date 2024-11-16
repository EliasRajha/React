import React, { useState, useEffect } from "react";
import Person from "./Person";

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      const userData = data.results[0];

      setPerson({
        firstName: userData.name.first,
        lastName: userData.name.last,
        email: userData.email,
      });
    } catch (error) {
      console.error("Error fetching person data:", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <button onClick={getPerson}>Generate New Person</button>
      {person ? <Person person={person} /> : <p>Loading...</p>}
    </div>
  );
}

export default PersonController;
