import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import './style.css';  // Import the CSS file for styles

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Book List</Link></li>
                        <li><Link to="/add">Add Book</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/add" element={<BookForm />} />
                    <Route path="/edit/:id" element={<BookForm />} />
                    <Route path="/books/:id" element={<BookDetail />} />
                    <Route path="/search" element={<SearchResults />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
