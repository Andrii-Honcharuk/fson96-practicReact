import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';

export const Form = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ content }));
    setContent('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={content}
        onChange={handleInput}
      />
    </form>
  );
};
