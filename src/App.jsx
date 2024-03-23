import { Section, Container, Header, Text } from 'components';
import { Form } from 'components/Form/Form';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form/>
          <Text textAlign="center">Create your first todo😉</Text>
        </Container>
      </Section>
    </>
  );
};
