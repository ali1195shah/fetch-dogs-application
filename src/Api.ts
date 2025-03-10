import { Dog } from "./Dog";

const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';


export const fetchBreeds = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/dogs/breeds`, {
      credentials: 'include', 
    });
    if (!response.ok) {
      throw new Error(`Error fetching breeds: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching breeds', error);
    throw error;
  }
};

export const fetchDogs = async (
breeds?: string[], page: number = 0, size: number = 30, sort: string = 'breed:asc', zipCodes?: string[]): Promise<{ resultIds: string[]; total: number; next?: string; prev?: string }> => {
  try {
    const url = new URL(`${API_BASE_URL}/dogs/search`);
    if (breeds && breeds.length > 0) {
      url.searchParams.append('breeds', breeds.join(','));
    }
    if (zipCodes && zipCodes.length > 0) {
      url.searchParams.append('zipCodes', zipCodes.join(','))
    }
    url.searchParams.append('from', String(page * size));
    url.searchParams.append('size', String(size));
    url.searchParams.append('sort', sort);

    const response = await fetch(url.toString(), {
      credentials: 'include', 
    });
    if (!response.ok) {
      throw new Error(`Error fetching dogs: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching dogs', error);
    throw error;
  }
};

export const fetchDogDetails = async (dogIds: string[]): Promise<Dog[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/dogs`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dogIds),
    });
    if (!response.ok) {
      throw new Error(`Error fetching dog details: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching dog details', error);
    throw error;
  }
};

export const generateMatch = async (dogIds: string[]): Promise<{ match: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/dogs/match`, {
      method: 'POST',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dogIds),
    });
    if (!response.ok) {
      throw new Error(`Error generating match: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error generating match', error);
    throw error;
  }
};

const handleLogout = async () => {
  try {
    const response = await fetch('https://frontend-take-home-service.fetch.com/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    if (response.ok) {
      window.location.href = '/';
    } else {
      throw new Error('Failed to logout. Please try again.');
    }
  } catch (error) {
    console.error('Error logging out', error);
    throw new Error('Failed to logout. Please try again.');
  }
};


export const fetchLocations = async (zipCodes: string[]): Promise<Location[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/locations`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zipCodes),
    });
    if (!response.ok) {
      throw new Error(`Error fetching locations: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching locations', error);
    throw error;
  }
};

export const searchLocations = async (filters: {
  city?: string;
  states?: string[];
  geoBoundingBox?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    bottom_left?: { lat: number; lon: number };
    top_right?: { lat: number; lon: number };
  };
  size?: number;
  from?: number;
}): Promise<{ results: Location[]; total: number }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/locations/search`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    });
    if (!response.ok) {
      throw new Error(`Error searching locations: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching locations', error);
    throw error;
  }
};