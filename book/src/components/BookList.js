import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('There was an error fetching the books!', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/books/${id}`)
            .then(() => setBooks(books.filter(book => book.id !== id)))
            .catch(error => console.error('There was an error deleting the book!', error));
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Book List
            </Typography>
            {books.length === 0 ? (
                <Typography variant="h6" align="center">No books available</Typography>
            ) : (
                books.map(book => (
                    <Card key={book.id} className="book-card">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {book.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                by {book.author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {book.price}  Rs
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to={`/books/${book.id}`}>
                                View Details
                            </Button>
                            <Button size="small" color="error" onClick={() => handleDelete(book.id)}>
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                ))
            )}
        </Container>
    );
};

export default BookList;
