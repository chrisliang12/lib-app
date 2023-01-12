import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './layout/NavbarAndFooter/Navbar';
import { Footer } from './layout/NavbarAndFooter/Footer';
import { HomePage } from './layout/HomePage/HomePage';
import { SearchBooksPage } from './layout/SearchBooksPage/SearchBooksPage';

export function App() {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </div>
  );
}