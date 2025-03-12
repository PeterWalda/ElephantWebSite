import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HabitatInformation = () => (
    <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
            Elephant Habitat Information
        </Typography>
        <Typography variant="body1" paragraph>
            Elephants are found primarily in Sub-Saharan Africa, South Asia, and Southeast Asia. They thrive in various habitats including savannas, forests, deserts, and marshes. Elephants require large, open areas with abundant vegetation and reliable water sources for survival and well-being.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>

            <Button variant="contained" color="primary" component={Link} to="/diet-information">Diet</Button>
            <Button variant="contained" color="primary" component={Link} to="/mating-reproduction">Mating and Reproduction</Button>
            <Button variant="contained" color="primary" component={Link} to="/scientific-classification">Scientific Name</Button>
            <Button component={Link} to="/" variant="contained">Back to Home</Button>

        </Box>
    </Container>
);

export default HabitatInformation;
