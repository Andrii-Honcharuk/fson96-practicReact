import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentTodo,
  setCurrentTodo,
  setIsEdit,
  editTodo,
} from '../../redux/todosSlice';
import { useState } from 'react';

export const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const [value, setValue] = useState(currentTodo?.content || '');
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setIsEdit(false));
    dispatch(setCurrentTodo(null));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: currentTodo.id, content: value }));
    dispatch(setIsEdit(false));
    dispatch(setCurrentTodo(null));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        value={value}
        autoFocus
        onChange={handleChange}
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
