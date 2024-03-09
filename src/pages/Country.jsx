import { Container, CountryInfo,  Section } from 'components';
import { useParams } from 'react-router';
import {fetchCountry} from '../service/countryApi'
import { useEffect, useState } from 'react';
export const Country = () => {
  const {countryId} = useParams()
  const [countryInfo, setCountryInfo]=useState(null)
  useEffect(()=>{ 
    const fetchCountryInfo= async()=>{
      const result = await fetchCountry(countryId);

      setCountryInfo(result);

    }; 
    fetchCountryInfo()}, [countryId])
  return (
    <Section>
      <Container>
        {countryInfo && <CountryInfo 
  flag ={countryInfo.flag}
  capital={countryInfo.capital}
  countryName={countryInfo.countryName}
  languages = {countryInfo.languages}
  population={countryInfo.population}
   />}
      </Container>
    </Section>
  );
};
