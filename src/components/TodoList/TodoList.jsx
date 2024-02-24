import { Grid, GridItem, TodoListItem } from '../';

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem id={id} text={text} index={++index} onDeleteTodo={onDeleteTodo} />
        </GridItem>
      ))}
    </Grid>
  );
};
