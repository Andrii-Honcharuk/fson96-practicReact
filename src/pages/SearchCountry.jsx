import { Container, CountryList, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [region, setRegion] = useState('');
  const onSubmit = value => {
    setRegion(value);
  };
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    if (!region) return;

    const fetchCountries = async () => {
      const result = await fetchByRegion(region);
      setCountries(result);
    };
    fetchCountries();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {countries && <CountryList countries={countries}></CountryList>}
      </Container>
    </Section>
  );
};
