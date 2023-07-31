import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { useGlobalContext } from "@/context/appContext";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const Edit = () => {
  const { state, editTodo } = useGlobalContext();
  const { newValue, elementId } = state.edit;
  const [editValue, setEditValue] = useState(newValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const onCancel = () => {
    editTodo({ isEditing: false, elementId: 0, newValue: "" });
  };

  const onSave = (id: number, value: string) => {
    editTodo({ isEditing: false, elementId: id, newValue: value });
    // console.log(value);
  };

  return (
    <div className={styles.edit_container}>
      <input
        autoFocus
        type="text"
        value={editValue}
        onChange={(e) => handleChange(e)}
      />
      <div className={styles.edit_btns}>
        <AiOutlineCheckCircle
          className={styles.check_icon}
          onClick={() => onSave(elementId, editValue)}
        />
        <MdOutlineCancel className={styles.cancel_icon} onClick={onCancel} />
      </div>
    </div>
  );
};

export default Edit;
