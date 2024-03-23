import {
  Section,
  Container,
  Header,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { Form } from 'components/Form/Form';
import { selectIsEdit } from './redux/todosSlice';
import { useSelector } from 'react-redux';

export const App = () => {
  const isEdit = useSelector(selectIsEdit);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {isEdit ? <EditForm /> : <Form />}
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
