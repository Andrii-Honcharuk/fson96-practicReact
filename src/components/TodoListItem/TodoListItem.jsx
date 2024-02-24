import { Text } from '..';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ id, text, index, onDeleteTodo }) => {

  const handleClick = () => {
    onDeleteTodo(id)
  }

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} onClick={handleClick} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
