import { Section, Container, Header, Text, TodoList } from "components";
import { Form } from "components/Form/Form";

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
