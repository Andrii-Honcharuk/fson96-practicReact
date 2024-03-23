import { Text } from "components";
import style from "./Todo.module.css";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

export const Todo = ({ todo, index }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO# {index + 1}
      </Text>

      <Text>{todo.content}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
