import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material'; // Using Material-UI for styling

const Login: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill out all fields.');
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://frontend-take-home-service.fetch.com/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      // console.log(response.status)

      if (response.ok) {
        navigate('/home');
      } else {
        setError('Login failed. Please check your name and email.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}>

      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          padding: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>

        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: 2 }}/>

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2 }}/>

          {error && (<Typography color="error" sx={{ marginBottom: 2 }}>
              {error}
            </Typography>)}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isLoading}
            sx={{ padding: '10px', fontSize: '1rem' }}>

            {isLoading ? 'Logging in...' : 'Submit'}

          </Button>

        </form>
        
      </Box>
    </Container>
  );
};

export default Login;