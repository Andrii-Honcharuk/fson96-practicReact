import { Country } from 'pages/Country';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { SearchCountry } from 'pages/SearchCountry';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country/:countryId" element={<Country />}>
          {' '}
        </Route>
        <Route path="/country" element={<SearchCountry />}>
          {' '}
        </Route>
      </Routes>
      ;
    </>
  );
};
