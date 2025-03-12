import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const images = require.context('./images/Gallery', false, /\.(jpg|jpeg|png|avif)$/);
const imagePaths = images.keys();

const Gallery = () => (
    <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
            Elephant Gallery
        </Typography>

        <Grid container spacing={2}>
            {imagePaths.map((path, index) => (
                <Grid item xs={6} md={4} key={index}>
                    <Link to={`/gallery/${index}`}>
                        <Box component="img"
                            src={images(path)}
                            alt={`Elephant ${index + 1}`}
                            sx={{ width: '100%', borderRadius: 2 }}
                        />
                    </Link>
                </Grid>
            ))}
        </Grid>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button component={Link} to="/" variant="contained" color="primary">Home</Button>
            {/*<Button component={Link} to="/submit-image" variant="outlined" color="secondary">*/}
            {/*    Submit Your Elephant Picture*/}
            {/*</Button>*/}

        </Box>
    </Container>
);

export default Gallery;
