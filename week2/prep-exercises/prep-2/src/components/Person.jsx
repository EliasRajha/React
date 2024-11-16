import React from "react";

function Person({ person }) {
  if (!person) {
    return null;
  }

  return (
    <ul>
      <li><strong>First Name:</strong> {person.firstName}</li>
      <li><strong>Last Name:</strong> {person.lastName}</li>
      <li><strong>Email:</strong> {person.email}</li>
    </ul>
  );
}

export default Person;
