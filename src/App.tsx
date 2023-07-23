import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { AppWrapper, GlobalStyle } from './styles';
import ErrorMessage from './components/ErrorMessage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <ErrorMessage />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper></>
  );
}

export default App;
