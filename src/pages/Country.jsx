//Country.jsx

import { Container, CountryInfo, GoBackBtn, Section } from 'components';
import { useParams } from 'react-router';
import { fetchCountry } from '../service/countryApi';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Country = () => {
  const { countryId } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const location = useLocation();
  const linkToBack = useRef(location?.state?.from || '/');

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const result = await fetchCountry(countryId);

      setCountryInfo(result);
    };
    fetchCountryInfo();
  }, [countryId]);
  return (
    <Section>
      <Container>
        <GoBackBtn link={linkToBack.current} />
        {countryInfo && (
          <CountryInfo
            flag={countryInfo.flag}
            capital={countryInfo.capital}
            countryName={countryInfo.countryName}
            languages={countryInfo.languages}
            population={countryInfo.population}
          />
        )}
      </Container>
    </Section>
  );
};
