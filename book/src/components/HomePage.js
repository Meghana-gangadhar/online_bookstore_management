import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Book, Search, Add } from '@mui/icons-material';

const HomePage = () => {
    return (
        <Container className="homepage-container">
            <Typography variant="h2" component="h1" align="center" gutterBottom>
                Welcome to the Bookstore
            </Typography>
            <Typography variant="h6" component="h2" align="center" paragraph>
                Discover and manage your favorite books. Explore, add, and search for books with ease.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card className="homepage-card">
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/book2.jpeg"
                            alt="Books"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Explore Books
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Browse through our collection of books and find your next read.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Book />}
                                fullWidth
                                href="/books"
                            >
                                Explore
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card className="homepage-card">
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/book1.jpeg"
                            alt="Add Book"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Add a Book
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Contribute to our collection by adding your favorite books.
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<Add />}
                                fullWidth
                                href="/add"
                            >
                                Add Book
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card className="homepage-card">
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/book2.jpeg"
                            alt="Search Books"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Search Books
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Find books by title or author using our powerful search feature.
                            </Typography>
                            <Button
                                variant="contained"
                                color="success"
                                startIcon={<Search />}
                                fullWidth
                                href="/search"
                            >
                                Search
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
