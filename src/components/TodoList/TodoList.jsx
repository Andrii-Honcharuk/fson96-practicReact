import { Grid, GridItem, Text, Todo } from "components";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todosSlice";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      {todos.length > 0 && (
        <Grid>
          {todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo todo={todo}
                index={index} />
            </GridItem>
          ))}
        </Grid>
      )}
      {todos.length === 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
