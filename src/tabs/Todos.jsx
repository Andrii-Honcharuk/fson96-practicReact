import { Form, Text, TodoList } from 'components';
import { useState } from 'react';

export const Todos = () => {

  const [todos, setTodos] = useState([]);

const handleSubmit = (newToodo) => {
  setTodos((prevTodos)=> [...prevTodos, newToodo]);
}

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <TodoList />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
  
};
