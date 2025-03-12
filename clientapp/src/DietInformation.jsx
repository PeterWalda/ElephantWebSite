import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const DietInformation = () => (
    <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
            Elephant Diet Information
        </Typography>
        <Typography variant="body1" paragraph>
            Elephants primarily eat grasses, leaves, bamboo, bark, roots, and fruits.
            An adult elephant can consume approximately 150-300 kg of food daily and spend about 12-18 hours eating.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>

            <Button variant="contained" color="primary" component={Link} to="/mating-reproduction">Mating and Reproduction</Button>
            <Button variant="contained" color="primary" component={Link} to="/habitat-information">Animal Habitat</Button>
            <Button variant="contained" color="primary" component={Link} to="/scientific-classification">Scientific Name and Classification</Button>
            <Button component={Link} to="/" variant="contained">Back to Home</Button>

        </Box>
    </Container>
);

export default DietInformation;
