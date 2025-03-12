import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ScientificClassification = () => (
    <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
            Elephant Scientific Name and Classification
        </Typography>
        <Typography variant="body1" paragraph>
            The scientific classification of elephants is as follows:
            <ul>
                <li><strong>Kingdom:</strong> Animalia</li>
                <li><strong>Phylum:</strong> Chordata</li>
                <li><strong>Class:</strong> Mammalia</li>
                <li><strong>Order:</strong> Proboscidea</li>
                <li><strong>Family:</strong> Elephantidae</li>
                <li><strong>Genera:</strong> Loxodonta (African elephants), Elephas (Asian elephants)</li>
                <li><strong>Species:</strong> Loxodonta africana (African bush elephant), Loxodonta cyclotis (African forest elephant), Elephas maximus (Asian elephant)</li>
            </ul>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>

            <Button variant="contained" color="primary" component={Link} to="/diet-information">Diet</Button>
            <Button variant="contained" color="primary" component={Link} to="/mating-reproduction">Mating and Reproduction</Button>
            <Button variant="contained" color="primary" component={Link} to="/habitat-information">Animal Habitat</Button>
            <Button component={Link} to="/" variant="contained">Back to Home</Button>

        </Box>

    </Container>
);

export default ScientificClassification;
