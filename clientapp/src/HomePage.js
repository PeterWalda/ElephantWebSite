import React, { useState } from 'react';
import { Button, Typography, Container, Box, Menu, MenuItem } from '@mui/material';
//import elephantImg from './images/photo-1507461476191-0ed4f9f18533.avif';
import elephantImg from './images/Elephant.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Elephant Enthusiasts!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Celebrating elephants and spreading awareness about their beauty, intelligence, and conservation.
      </Typography>

      <Box sx={{ my: 4 }}>
        <img
          src={elephantImg}
          alt="Elephant"
          style={{ width: '100%', maxWidth: 600, borderRadius: 8 }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="primary"
          onMouseEnter={handleMenuOpen}
        >
          About Elephants
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
        >
          <MenuItem component={Link} to="/diet-information">Diet Information</MenuItem>
          <MenuItem component={Link} to="/mating-reproduction">Mating and Reproduction Information</MenuItem>
          <MenuItem component={Link} to="/habitat-information">Animal Habitat Information</MenuItem>
          <MenuItem component={Link} to="/scientific-classification">Scientific Name and Classification</MenuItem>
        </Menu>

        <Button variant="contained" color="primary">Elephant Conservation</Button>
              <Button component={Link} to="/gallery" variant="contained" color="primary">Gallery</Button>
              {/*<Button variant="contained" color="primary">Join the Community</Button>*/}
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 6 }}>
        © {new Date().getFullYear()} Elephant Enthusiasts. All rights reserved.
      </Typography>
    </Container>
  );
};

export default HomePage;