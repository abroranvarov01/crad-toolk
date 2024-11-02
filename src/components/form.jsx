// form.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userReducer";
import { increment } from "../redux/count-reducer";
import { nanoid } from "nanoid";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const newUser = { ...data, id: nanoid() };
    dispatch(addUser(newUser));
    dispatch(increment());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;
