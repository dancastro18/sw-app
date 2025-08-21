import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Header/>
      <MainContent>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/:type/:encodedUrl' element={<DetailsPage/>}/>
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
