import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchResults = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        axios.get(`http://localhost:8080/api/books/search?query=${query}`)
            .then(response => setResults(response.data))
            .catch(error => console.error('There was an error searching for books!', error));
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Search Books
            </Typography>
            <TextField
                label="Search by Title or Author"
                variant="outlined"
                fullWidth
                margin="normal"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
            <Grid container spacing={4} marginTop={3}>
                {results.map(book => (
                    <Grid item xs={12} sm={4} key={book.id}>
                        <Card className="book-card">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {book.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    by {book.author}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rs  {book.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={Link} to={`/books/${book.id}`}>
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchResults;
