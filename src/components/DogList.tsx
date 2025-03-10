import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  CardMedia,
  CircularProgress,
  Snackbar,
  Alert,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { fetchBreeds, fetchDogs, fetchDogDetails, generateMatch, searchLocations } from '../Api.ts';
import { Dog, Location } from '../Dog.ts';
import DogCard from "./DogCard.tsx"

const DogList: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [totalDogs, setTotalDogs] = useState<number>(0);
  const [sort, setSort] = useState<string>('breed:asc');
  const [loading, setLoading] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [match, setMatch] = useState<Dog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFavoritesModal, setShowFavoritesModal] = useState<boolean>(false);
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>([]);

  // ZIP code search state
  const [zipCode, setZipCode] = useState<string>('');
  const [locationResults, setLocationResults] = useState<Location[]>([]);

  const pageSize = 30;

  // Fetch breeds on component mount
  useEffect(() => {
    const loadBreeds = async () => {
      try {
        setLoading(true);
        const breedsData = await fetchBreeds();
        setBreeds(breedsData);
      } catch (error) {
        console.error('Error loading breeds', error);
        setError('Failed to load breeds. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    loadBreeds();
  }, []);

  // Fetch dogs based on filters, pagination, and sorting
  useEffect(() => {
    const loadDogs = async () => {
      setLoading(true);
      try {
        const searchResult = await fetchDogs(selectedBreed ? [selectedBreed] : [], page, pageSize, sort);
        const dogDetails = await fetchDogDetails(searchResult.resultIds);
        setDogs(dogDetails);
        setTotalDogs(searchResult.total);
      } catch (error) {
        console.error('Error loading dogs', error);
        setError('Failed to load dogs. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    loadDogs();
  }, [selectedBreed, page, sort]);

  // Fetch favorite dogs when favorites change
  useEffect(() => {
    const loadFavoriteDogs = async () => {
      if (favorites.length > 0) {
        try {
          const favoriteDogDetails = await fetchDogDetails(favorites);
          setFavoriteDogs(favoriteDogDetails);
        } catch (error) {
          console.error('Error loading favorite dogs', error);
          setError('Failed to load favorite dogs. Please try again.');
        }
      } else {
        setFavoriteDogs([]);
      }
    };
    loadFavoriteDogs();
  }, [favorites]);

  // Handle ZIP code search
  const handleSearchByZipCode = async () => {
    if (!zipCode) {
      setError('Please enter a valid ZIP code.');
      return;
    }
  
    setLoading(true);
    try {
      // Fetch locations using the ZIP code
      const locationFilters = {
        zipCode: zipCode, 
        size: 100,
      };
      
      const locationData = await searchLocations(locationFilters);
  
      // Fetch dogs using the ZIP codes
      const searchResult = await fetchDogs(selectedBreed ? [selectedBreed] : [], page, pageSize, sort, zipCode ? [zipCode] : []);
      const dogDetails = await fetchDogDetails(searchResult.resultIds);
      console.log(searchResult)
      console.log(dogDetails)
      setDogs(dogDetails);
      setTotalDogs(searchResult.total);
    } catch (error) {
      console.error('Error searching locations', error);
      setError('Failed to search locations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleZipCodeClear = async () => {
    setLoading(true);
    try {
      const searchResult = await fetchDogs(selectedBreed ? [selectedBreed] : [], page, pageSize, sort);
      const dogDetails = await fetchDogDetails(searchResult.resultIds);
      setDogs(dogDetails);
      setTotalDogs(searchResult.total);
    } catch (error) {
      console.error('Error fetching dogs', error);
      setError('Failed to fetch dogs. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  // Handle breed filter change
  const handleBreedChange = (event: any) => {
    setSelectedBreed(event.target.value as string);
    setPage(0);
  };

  // Handle sort change
  const handleSortChange = (event: any) => {
    setSort(event.target.value as string);
  };

  // Handle pagination
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Toggle favorite dogs
  const toggleFavorite = (dogId: string) => {
    if (favorites.includes(dogId)) {
      setFavorites(favorites.filter((id) => id !== dogId));
    } else {
      setFavorites([...favorites, dogId]);
    }
  };

  // Generate a match from favorites
  const handleGenerateMatch = async () => {
    if (favorites.length === 0) {
      setError('Please select at least one favorite dog.');
      return;
    }

    try {
      setLoading(true);
      const matchResult = await generateMatch(favorites);
      const matchedDog = await fetchDogDetails([matchResult.match]);
      setMatch(matchedDog[0]);
    } catch (error) {
      console.error('Error generating match', error);
      setError('Failed to generate a match. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch('https://frontend-take-home-service.fetch.com/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        window.location.href = '/'; // Redirect to the login page
      } else {
        setError('Failed to logout. Please try again.');
      }
    } catch (error) {
      console.error('Error logging out', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  // Close error alert
  const handleCloseError = () => {
    setError(null);
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fetch Dog Adoption
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Dogs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              {/* ZIP Code Search */}
              <TextField
                label="ZIP Code"
                value={zipCode}
                onChange={(e) => {

                    setZipCode(e.target.value as string);

                    if(e.target.value === ""){ handleZipCodeClear()}
                }}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSearchByZipCode}
                sx={{ marginTop: 2 }}
              >
                Search by ZIP Code
              </Button>

              {/* Breed Filter */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Filter by Breed</InputLabel>
                <Select value={selectedBreed} onChange={handleBreedChange} label="Filter by Breed">
                  {breeds.map((breed) => (
                    <MenuItem key={breed} value={breed}>
                      {breed}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Sort */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Sort by</InputLabel>
                <Select value={sort} onChange={handleSortChange} label="Sort by">
                  <MenuItem value="breed:asc">Breed (A-Z)</MenuItem>
                  <MenuItem value="breed:desc">Breed (Z-A)</MenuItem>
                  <MenuItem value="name:asc">Name (A-Z)</MenuItem>
                  <MenuItem value="name:desc">Name (Z-A)</MenuItem>
                  <MenuItem value="age:asc">Age (Low to High)</MenuItem>
                  <MenuItem value="age:desc">Age (High to Low)</MenuItem>
                </Select>
              </FormControl>

              {/* Favorites Button */}
              <Button
                variant="contained"
                color="info"
                fullWidth
                onClick={() => setShowFavoritesModal(true)}
                sx={{ marginTop: 2 }}
              >
                View Favorites ({favorites.length})
              </Button>
            </Paper>
          </Grid>

          {/* Dog Results */}
          <Grid item xs={12} md={9}>
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
              </Box>
            ) : (
              <>
                {/* Dog Cards */}
                <Grid container spacing={3}>
                  {dogs.map((dog) => (
                    <Grid item xs={12} sm={6} md={4} key={dog.id}>
                      <DogCard
                        dog={dog}
                        isFavorite={favorites.includes(dog.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    </Grid>
                  ))}
                </Grid>

                {/* Pagination */}
                <Box display="flex" justifyContent="space-between" marginTop={4}>
                  <Button
                    variant="contained"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={(page + 1) * pageSize >= totalDogs}
                  >
                    Next
                  </Button>
                </Box>

                {/* Generate Match Button */}
                <Box display="flex" justifyContent="center" marginTop={4}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleGenerateMatch}
                    disabled={favorites.length === 0}
                  >
                    Generate Match
                  </Button>
                </Box>

                {/* Match Result */}
                {match && (
                  <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
                    <Typography variant="h5" gutterBottom>
                      Your Match!
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <CardMedia component="img" height="140" image={match.img} alt={match.name} />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <Typography variant="h6">{match.name}</Typography>
                        <Typography>Breed: {match.breed}</Typography>
                        <Typography>Age: {match.age}</Typography>
                        <Typography>Zip Code: {match.zip_code}</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* Favorites Modal */}
      <Modal open={showFavoritesModal} onClose={() => setShowFavoritesModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '600px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Your Favorites
          </Typography>
          <Box sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
            <Grid container spacing={2}>
              {favoriteDogs.map((dog) => (
                <Grid item xs={12} sm={6} key={dog.id}>
                  <DogCard
                        dog={dog}
                        isFavorite={favorites.includes(dog.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                </Grid>
              ))}
            </Grid>
            {favoriteDogs.length === 0 && (
              <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                No favorites added yet.
              </Typography>
            )}
          </Box>
        </Box>
      </Modal>

      {/* Error Snackbar */}
      <Snackbar open={!!error} autoHideDuration={3000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default DogList;