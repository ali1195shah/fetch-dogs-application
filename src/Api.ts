import { Dog } from "./Dog";


// export const fetchDogs = async (dogIds: string[]): Promise<Dog[]> => {
//   const response = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
//     method: "GET",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(dogIds),
//   });
//   if (!response.ok) throw new Error("Failed to fetch dog details");
//   return response.json();
// };

// export const fetchAllDogs = async (): Promise<Dog[]> => {
//   const response = await fetch(`https://frontend-take-home-service.fetch.com/dogs/zipCodes`, {
//     credentials: "include",
//   });
//   // console.log(response)
//   console.log("Request URL:", response.url);
//   return await response.json();

  // export const fetchDogsByIds = async (ids: string[]): Promise<Dog[]> => {
  //   const response = await fetch(`https://frontend-take-home-service.fetch.com/dogs`, {
  //     method: "POST",
  //     credentials: "include",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(ids),
  //   });
  //   return response.json();
  // };


//   const API_BASE_URL = "https://frontend-take-home-service.fetch.com";

//   export const fetchBreeds = async (): Promise<string[]> => {
//     const response = await fetch(`${API_BASE_URL}/dogs/breeds`, {
//       credentials: "include",
//     });
//     console.log(response)
//     return response.json();
// };
 

// export const searchDogs = async (params: string): Promise<{ resultIds: string[] }> => {
//   const response = await fetch(`${API_BASE_URL}/dogs/search?${params}`, {
//     credentials: "include",
//   });
//   return response.json();
// };


// // Fetch full dog details from an array of dog IDs
// export const fetchDogsByIds = async (ids: string[]): Promise<Dog[]> => {
//   const response = await fetch(`${API_BASE_URL}/dogs`, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(ids),
//   });
//   return response.json();
// };



// const API_BASE_URL = "https://frontend-take-home-service.fetch.com";

// // Function to handle user login
// export const login = async (name: string, email: string) => {
//   const response = await fetch(`${API_BASE_URL}/auth/login`, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email }),
//   });
//   return response.ok;
// };

// // Fetch all breeds
// export const fetchBreeds = async (): Promise<string[]> => {
//   const response = await fetch(`${API_BASE_URL}/dogs/breeds`, {
//     credentials: "include",
//   });
//   return response.json();
// };

// // Fetch dogs based on search filters
// export const searchDogs = async (params: string): Promise<{ resultIds: string[] }> => {
//   const response = await fetch(`${API_BASE_URL}/dogs/search?${params}`, {
//     credentials: "include",
//   });
//   return response.json();
// };

// // Fetch full dog details from an array of dog IDs
// export const fetchDogsByIds = async (ids: string[]): Promise<Dog[]> => {
//   const response = await fetch(`${API_BASE_URL}/dogs`, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(ids),
//   });
//   return response.json();
// };

// // Fetch a match from a list of favorited dogs
// export const fetchMatch = async (ids: string[]): Promise<{ match: string }> => {
//   const response = await fetch(`${API_BASE_URL}/dogs/match`, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(ids),
//   });
//   return response.json();
// };




// const API_BASE_URL = "https://frontend-take-home-service.fetch.com";

// // Fetch Dog IDs (search API)
// export const searchDogs = async (params: string) => {
//   const response = await fetch(`${API_BASE_URL}/dogs/search?${params}`, {
//     credentials: "include",
//   });
//   return response.json(); // Returns { resultIds: string[], total: number, next?: string }
// };

// // Fetch Full Dog Details using IDs
// export const fetchDogsByIds = async (dogIds: string[]) => {
//   const response = await fetch(`${API_BASE_URL}/dogs`, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(dogIds),
//   });
//   return response.json(); // Returns an array of Dog objects
// };



// const API_BASE_URL = "https://frontend-take-home-service.fetch.com";

// // Fetch dog IDs first (from search API)
// export const searchDogs = async (params: string) => {
//   const response = await fetch(`${API_BASE_URL}/dogs/search?${params}`, {
//     credentials: "include", // Required for authentication
//   });

//   if (!response.ok) throw new Error("Failed to fetch dog IDs");

//   return response.json(); // Returns { resultIds: string[], total: number, next?: string }
// };

// // Fetch full Dog objects using IDs
// export const fetchDogsByIds = async (dogIds: string[]) => {
//   const response = await fetch(`${API_BASE_URL}/dogs;`, {
//     method: "POST",
//     credentials: "include",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(dogIds),
//   });

//   if (!response.ok) throw new Error("Failed to fetch dog details");

//   return response.json(); // Returns an array of Dog objects
// };

// // ✅ **Final fetchDogs function: Calls both endpoints**
// export const fetchDogs = async () => {
//   try {
//     // Step 1: Search for dogs (gets IDs)
//     const searchResults = await searchDogs("size=10"); // Fetch 10 dogs at a time
//     if (searchResults.resultIds.length === 0) return [];

//     // Step 2: Fetch full dog details using the IDs
//     return await fetchDogsByIds(searchResults.resultIds);
//   } catch (error) {
//     console.error("Error fetching dogs:", error);
//     throw error;
//   }
// };


// From Here
// src/services/dogService.ts
// import axios from 'axios';

// const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

// export const fetchBreeds = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/dogs/breeds`, {
//       withCredentials: true, // Include cookies
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching breeds', error);
//     throw error;
//   }
// };

// export const fetchDogs = async (breeds?: string[], page: number = 0, size: number = 25, sort: string = 'breed:asc') => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/dogs/search`, {
//       params: {
//         breeds: breeds,
//         from: page * size, // Pagination offset
//         size,
//         sort,
//       },
//       withCredentials: true, // Include cookies
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching dogs', error);
//     throw error;
//   }
// };

// export const fetchDogDetails = async (dogIds: string[]) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/dogs`, dogIds, {
//       withCredentials: true, // Include cookies
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching dog details', error);
//     throw error;
//   }
// };



// // src/services/dogService.ts
// export const generateMatch = async (dogIds: string[]) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/dogs/match`, dogIds, {
//       withCredentials: true, // Include cookies
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error generating match', error);
//     throw error;
//   }
// };

// src/services/dogService.ts
const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

// Fetch all breeds
export const fetchBreeds = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/dogs/breeds`, {
      credentials: 'include', // Include cookies
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

// Fetch dogs based on filters and pagination
export const fetchDogs = async (
breeds?: string[], page: number = 0, size: number = 30, sort: string = 'breed:asc', zipCodes?: string[]): Promise<{ resultIds: string[]; total: number; next?: string; prev?: string }> => {
  try {
    const url = new URL(`${API_BASE_URL}/dogs/search`);
    if (breeds && breeds.length > 0) {
      url.searchParams.append('breeds', breeds.join(','));
    }
    // Add ZIP codes to the query if provided
    if (zipCodes && zipCodes.length > 0) {
      url.searchParams.append('zipCodes', zipCodes.join(','))
    }
    url.searchParams.append('from', String(page * size));
    url.searchParams.append('size', String(size));
    url.searchParams.append('sort', sort);

    const response = await fetch(url.toString(), {
      credentials: 'include', // Include cookies
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

// Fetch details for specific dog IDs
export const fetchDogDetails = async (dogIds: string[]): Promise<Dog[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/dogs`, {
      method: 'POST',
      credentials: 'include', // Include cookies
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

// Generate a match based on favorite dog IDs
export const generateMatch = async (dogIds: string[]): Promise<{ match: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/dogs/match`, {
      method: 'POST',
      credentials: 'include', // Include cookies
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
      window.location.href = '/'; // Redirect to the login page
    } else {
      throw new Error('Failed to logout. Please try again.');
    }
  } catch (error) {
    console.error('Error logging out', error);
    throw new Error('Failed to logout. Please try again.');
  }
};



// src/services/dogService.ts
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