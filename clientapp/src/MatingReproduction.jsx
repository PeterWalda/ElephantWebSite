import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MatingReproduction = () => (
    <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
            Elephant Mating and Reproduction Information
        </Typography>
        <Typography variant="body1" paragraph>
            Elephants have a gestational period of about 22 months, the longest of any land mammal. Typically, one calf is born at a time. Elephant calves stay closely dependent on their mothers for about 3-5 years and remain part of their family groups for much longer.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>

            <Button variant="contained" color="primary" component={Link} to="/diet-information">Diet</Button>
            <Button variant="contained" color="primary" component={Link} to="/habitat-information">Animal Habitat</Button>
            <Button variant="contained" color="primary" component={Link} to="/scientific-classification">Scientific Name</Button>
            <Button component={Link} to="/" variant="contained">Back to Home</Button>

        </Box>
    </Container>
);

export default MatingReproduction;
