import { Container, CountryList, Section } from 'components';
import { fetchByRegion } from '../service/countryApi';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      const result = await fetchByRegion('europe');
      setCountries(result);
    };
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        {countries && <CountryList countries={countries}></CountryList>}
      </Container>
    </Section>
  );
};
