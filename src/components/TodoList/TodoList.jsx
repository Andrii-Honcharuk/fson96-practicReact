import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todosSlice';
import { selectFilter } from '../../redux/filterSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const visibleTodos = todos.filter((todo) =>
    todo.content.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {visibleTodos.length > 0 && (
        <Grid>
          {visibleTodos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo todo={todo} index={index} />
            </GridItem>
          ))}
        </Grid>
      )}
      {visibleTodos.length === 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
