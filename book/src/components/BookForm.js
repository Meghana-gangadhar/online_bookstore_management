import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const BookForm = () => {
    const [book, setBook] = useState({ title: '', author: '', price: '', isbn: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/books/${id}`)
                .then(response => setBook(response.data))
                .catch(error => console.error('There was an error fetching the book!', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({ ...prevBook, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://localhost:8080/api/books/${id}`, book)
                .then(() => navigate('/books'))
                .catch(error => console.error('There was an error updating the book!', error));
        } else {
            axios.post('http://localhost:8080/api/books', book)
                .then(() => navigate('/books'))
                .catch(error => console.error('There was an error adding the book!', error));
        }
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                {id ? 'Edit Book' : 'Add Book'}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Author"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Price"
                    name="price"
                    type="number"
                    value={book.price}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="ISBN"
                    name="isbn"
                    value={book.isbn}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {id ? 'Update Book' : 'Add Book'}
                </Button>
            </form>
        </Container>
    );
};

export default BookForm;
