import React, { useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import GenreResult from '../pages/GenreResult';
import SearchResults from '../pages/SearchResults';
import HomeMovies from '../pages/HomeMovies';
import MovieDetails from '../pages/MovieDetails';
import Header from './Header';
import Footer from './Footer';

const LangContext = createContext();

function LangProvider({ children }) {
  const { lang } = useParams();
  window.lang.set(lang);

  return (
    <>
      <Header />
      <main id="main">
        <LangContext.Provider value={lang}>{children}</LangContext.Provider>
      </main>
      <Footer />
    </>
  )
}

export function useLang() {
  return useContext(LangContext);
}


export default function Layout() {
  return (
    <Router forceRefresh={true}>

      <Routes>
        <Route exact path="/" element={<LangProvider><HomeMovies /></LangProvider>} />
        <Route path="/:lang" element={<LangProvider><HomeMovies /></LangProvider>} />
        <Route path="/:lang/movie/:movieId" element={<LangProvider><MovieDetails /></LangProvider>} />
        <Route path="/:lang/search/:keyword" element={<LangProvider><SearchResults /></LangProvider>} />
        <Route path="/:lang/generos/:genreId/:genre" element={<LangProvider><GenreResult /></LangProvider>} />
      </Routes>
    </Router >
  );
}