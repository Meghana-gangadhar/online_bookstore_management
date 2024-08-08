import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} Bookstore. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
