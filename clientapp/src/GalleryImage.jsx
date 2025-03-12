import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const images = require.context('./images/Gallery', false, /\.(jpg|jpeg|png|avif)$/);
const imagePaths = images.keys();

const GalleryImage = () => {
    const { imageId } = useParams();
    const imgSrc = images(imagePaths[imageId]);

    return (
        <Container sx={{ textAlign: 'center', py: 4 }}>
            <Box component="img"
                src={imgSrc}
                alt={`Elephant ${imageId}`}
                sx={{ width: '100%', maxWidth: 800, borderRadius: 4 }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
                Elephant {parseInt(imageId) + 1}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                A beautiful elephant in its natural habitat.
            </Typography>
            <Button component={Link} to="/gallery" variant="contained" sx={{ mt: 3 }}>
                Back to Gallery
            </Button>
        </Container>
    );
};

export default GalleryImage;
