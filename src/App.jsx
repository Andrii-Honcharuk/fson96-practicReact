import { Country } from 'pages/Country';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country/:countryId" element = {<Country/>}> </Route>
      </Routes>
      ;
    </>
  );
};
