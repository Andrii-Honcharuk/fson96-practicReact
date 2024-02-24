import { Form, Text, TodoList } from 'components';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = newToodo => {
    setTodos(prevTodos => [...prevTodos, newToodo]);
  };

  const handleDeleteTodo = (idToDelete) => {
    setTodos( prevTodos => prevTodos.filter(todo => todo.id !== idToDelete))
  }

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {todos.length > 0 && <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />}
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
