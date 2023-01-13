import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Counter from './1-counter/counter';
import Modal from './2-modal/modal';
import Quiz from './3-quiz/quiz';
import UsersMain from './4-users/users';
import { MainPage } from './main';
import { Nav } from './nav';
import { useLocation } from 'react-router';
import Converter from './5-currency-converter/converter';
import Photos from './6-photos/photos';

const Navigation = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/' && <Nav />}
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/users" element={<UsersMain />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
};

export default Navigation;
