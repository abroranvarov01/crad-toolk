// user-card.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../redux/userReducer";
import { decrement } from "../redux/count-reducer";

const UserCard = ({ title, id }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editUser({ id, data: { firstName: newTitle } }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="user-card">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <h2>{title}</h2>
      )}
      <button onClick={() => {
        dispatch(deleteUser(id));
        dispatch(decrement());
      }}>Delete</button>
      <button onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default UserCard;
