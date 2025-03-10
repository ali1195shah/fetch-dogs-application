import React from 'react';
import { Dog } from '../Dog.ts'; 
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

interface DogCardProps {
  dog: Dog;
  isFavorite: boolean;
  onToggleFavorite: (dogId: string) => void;
}

const DogCard: React.FC<DogCardProps> = ({ dog, isFavorite, onToggleFavorite }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="250px"
        image={dog.img}
        alt={dog.name}
      />
      <CardContent>
        <Typography variant="h6">{dog.name}</Typography>
        <Typography>Breed: {dog.breed}</Typography>
        <Typography>Age: {dog.age}</Typography>
        <Typography>Zip Code: {dog.zip_code}</Typography>
        <Button
          variant={isFavorite ? 'outlined' : 'contained'}
          color="primary"
          fullWidth
          onClick={() => onToggleFavorite(dog.id)}
          sx={{ marginTop: 2 }}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DogCard;