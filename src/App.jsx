// App.jsx
import React from "react";
import Form from "./components/form";
import UserCard from "./components/user-card";
import { useSelector } from "react-redux";

function App() {
  const users = useSelector((state) =>
    Array.isArray(state.user.user) ? state.user.user : []
  );
  const cardCount = useSelector((state) => state.cardCount);

  console.log("Users:", users);
  console.log("Card Count:", cardCount);

  return (
    <div>
      <h1>Total Cards: {cardCount}</h1>
      <Form />
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} title={user.firstName} id={user.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
