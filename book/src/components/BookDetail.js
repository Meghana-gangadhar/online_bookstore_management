import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button } from '@mui/material';
import { useParams, Link } from 'react-router-dom';

const BookDetail = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/books/${id}`)
            .then(response => setBook(response.data))
            .catch(error => console.error('There was an error fetching the book details!', error));
    }, [id]);

    return (
        <Container>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Book Details
            </Typography>
            <Typography variant="h5">Title: {book.title}</Typography>
            <Typography variant="h6">Author: {book.author}</Typography>
            <Typography variant="body1">Price: ${book.price}</Typography>
            <Typography variant="body2">ISBN: {book.isbn}</Typography>
            <Button variant="contained" color="secondary" component={Link} to={`/edit/${book.id}`}>
                Edit Book
            </Button>
        </Container>
    );
};

export default BookDetail;
