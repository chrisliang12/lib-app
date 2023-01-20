import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './layout/NavbarAndFooter/Navbar';
import { Footer } from './layout/NavbarAndFooter/Footer';
import { HomePage } from './layout/HomePage/HomePage';
import { SearchBooksPage } from './layout/SearchBooksPage/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BookCheckoutPage } from './layout/BookCheckoutPage/BookCheckoutPage';

export function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/search">
            <SearchBooksPage />
          </Route>

          <Route path="/checkout/:bookId">
            <BookCheckoutPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}