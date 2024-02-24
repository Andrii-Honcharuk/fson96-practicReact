import { Form, Text, TodoList } from 'components';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = newToodo => {
    setTodos(prevTodos => [...prevTodos, newToodo]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {todos.length > 0 && <TodoList todos={todos} />}
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
