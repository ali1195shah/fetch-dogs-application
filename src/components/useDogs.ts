// // import { useEffect, useState } from "react";
// // import { Dog } from "../Dog.ts";
// // import { searchDogs, fetchDogsByIds } from "../Api.ts";

// // export const useDog = () => {
// //   const [dogs, setDogs] = useState<Dog[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     // Fetch dogs inside useEffect and handle the promise
// //     const getDogs = async () => {
// //     //   try {
// //         const fetchedDogs = await fetchDogs();  // Fetching the dog data
// //         // console.log(fetchDogs)
// //         setDogs(fetchedDogs);  // Setting the state with the array of dogs
// //         // setLoading(false);  // Set loading to false after fetching is done
// //     //   } catch (error: any) {
// //     //     setError(error.message);  // If there's an error, set the error message
// //     //     setLoading(false);  // Ensure loading is false even if there's an error
// //     //   }
// //     };

// //     getDogs();  // Call the function to fetch dogs
// //   }, []);  // Empty dependency array, so this runs only once after the component mounts

// //   return { dogs, loading, error };  // Return the dogs, loading, and error states
// // };




// import { useEffect, useState } from "react";
// import { searchDogs, fetchDogsByIds } from "../Api.ts";
// import { Dog } from "../Dog.ts";

// export const useDogs = () => {
//   const [dogs, setDogs] = useState<Dog[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
  
//   const [breedFilter, setBreedFilter] = useState<string | null>(null);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
//   const [page, setPage] = useState(1);
//   const pageSize = 10;

//   const fetchDogs = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const searchParams = new URLSearchParams();
//       searchParams.append("size", pageSize.toString());
//       searchParams.append("from", ((page - 1) * pageSize).toString());
//       searchParams.append("sort", `breed:${sortOrder}`);

//       if (breedFilter) {
//         searchParams.append("breeds", breedFilter);
//       }

//       // Step 1: Get dog IDs
//       const searchResults = await searchDogs(searchParams.toString());
//       if (searchResults.resultIds.length === 0) {
//         setDogs([]);
//         return;
//       }

//       // Step 2: Get full dog details
//       const fullDogs = await fetchDogsByIds(searchResults.resultIds);
//       setDogs(fullDogs);
//     } catch (err) {
//       setError("Failed to fetch dogs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDogs();
//   }, [breedFilter, sortOrder, page]);

//   return { dogs, loading, error, setBreedFilter, setSortOrder, page, setPage };
// };



// import { useEffect, useState } from "react";
// import { searchDogs, fetchDogsByIds } from "../Api.ts";
// import { Dog } from "../Dog.ts";

// export const useDogs = () => {
//   const [dogs, setDogs] = useState<Dog[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
  
//   const [breedFilter, setBreedFilter] = useState<string | null>(null);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
//   const [page, setPage] = useState(1);
//   const pageSize = 10;

//   const fetchDogs = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const searchParams = new URLSearchParams();
//       searchParams.append("size", pageSize.toString());
//       searchParams.append("from", ((page - 1) * pageSize).toString());
//       searchParams.append("sort", `breed:${sortOrder}`);

//       if (breedFilter) {
//         searchParams.append("breeds", breedFilter);
//       }

//       // Step 1: Get dog IDs
//       const searchResults = await searchDogs(searchParams.toString());
//       if (searchResults.resultIds.length === 0) {
//         setDogs([]);
//         return;
//       }

//       // Step 2: Get full dog details
//       const fullDogs = await fetchDogsByIds(searchResults.resultIds);
//       setDogs(fullDogs);
//     } catch (err) {
//       setError("Failed to fetch dogs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDogs();
//   }, [breedFilter, sortOrder, page]);

//   return { dogs, loading, error, setBreedFilter, setSortOrder, page, setPage };
// };



// import { useEffect, useState } from "react";
// import { searchDogs, fetchDogsByIds } from "../Api.ts";
// import { Dog } from "../Dog.ts";

// export const useDogs = () => {
//   const [dogs, setDogs] = useState<Dog[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
  
//   const [breedFilter, setBreedFilter] = useState<string | null>(null);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
//   const [page, setPage] = useState(1);
//   const pageSize = 10;

//   const fetchDogs = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const searchParams = new URLSearchParams();
//       searchParams.append("size", pageSize.toString());
//       searchParams.append("from", ((page - 1) * pageSize).toString());
//       searchParams.append("sort", `breed:${sortOrder}`);

//       if (breedFilter) {
//         searchParams.append("breeds", breedFilter);
//       }

//       // Step 1: Get dog IDs
//       const searchResults = await searchDogs(searchParams.toString());
//       if (searchResults.resultIds.length === 0) {
//         setDogs([]);
//         return;
//       }

//       // Step 2: Get full dog details
//       const fullDogs = await fetchDogsByIds(searchResults.resultIds);
//       setDogs(fullDogs);
//     } catch (err) {
//       setError("Failed to fetch dogs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDogs();
//   }, [breedFilter, sortOrder, page]);

//   return { dogs, loading, error, setBreedFilter, setSortOrder, page, setPage };
// };




import { useEffect, useState } from "react";
import { Dog } from "../Dog.ts";
import { fetchDogs } from "../Api.ts";

export const useDogs = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDogs = async () => {
      setLoading(true);
      try {
        const dogData = await fetchDogs(); // Calls API
        setDogs(dogData);
      } catch (err) {
        setError("Failed to fetch dogs.");
      } finally {
        setLoading(false);
      }
    };

    getDogs();
  }, []);

  return { dogs, loading, error };
};
