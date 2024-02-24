import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { nanoid } from 'nanoid';

export const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target.elements.search.value.trim();
    if (!text) {
      alert('Input please text');
      return;
    }

    const todo = {
      id: nanoid(),
      text,
    };

    onSubmit(todo);
    e.target.reset();
  };

  return (
    <>
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
        />
      </form>
    </>
  );
};
