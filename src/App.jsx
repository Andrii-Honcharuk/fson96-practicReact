import { Section, Container, Header, Text, TodoList, Filter } from 'components';
import { Form } from 'components/Form/Form';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
