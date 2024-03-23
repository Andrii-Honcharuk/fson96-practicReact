import { Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todosSlice';

export const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>

      <Text>{todo.content}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleClick}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
