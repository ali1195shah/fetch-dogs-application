// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, Typography, Container, Box } from '@mui/material'; // Using Material-UI for styling
// import notFoundImage from '../images/suspicious-dog.png'


// const NotFound: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <Container
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         textAlign: 'center',
//         backgroundColor: '#f5f5f5',
//       }}
//     >
//       <Box sx={{ maxWidth: 600, padding: 3 }}>

//       <img
//           src={notFoundImage}
//           alt="Page Not Found"
//           style={{
//             width: '200px', // Adjust the size as needed
//             height: 'auto',
//             marginBottom: '20px',
//           }}
//         />

//         <Typography
//           variant="h1"
//           sx={{
//             fontSize: '6rem',
//             fontWeight: 'bold',
//             color: '#3f51b5',
//             marginBottom: 2,
//           }}
//         >
//           404
//         </Typography>
//         <Typography
//           variant="h4"
//           sx={{
//             fontSize: '2rem',
//             fontWeight: 'medium',
//             color: '#333',
//             marginBottom: 3,
//           }}
//         >
//           Oops! Dog Not Found
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: '1.2rem',
//             color: '#666',
//             marginBottom: 4,
//           }}
//         >
//           The page you're looking for doesn't exist or has been moved. No Dogs here! Let's go back!
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           onClick={() => navigate('/')}
//           sx={{
//             padding: '10px 30px',
//             fontSize: '1rem',
//             borderRadius: '5px',
//             textTransform: 'none',
//           }}
//         >
//           Go Back Home
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default NotFound;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material'; // Using Material-UI for styling

// Import your image (make sure the path is correct)

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ maxWidth: 600, padding: 3 }}>
        {/* Image */}
        <img
          src="./images/suspicious-dog.png"
          alt="Page Not Found"
          style={{
            width: '200px', 
            height: 'auto',
            marginBottom: '20px',
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: '6rem',
            fontWeight: 'bold',
            color: '#3f51b5',
            marginBottom: 2,
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: '2rem',
            fontWeight: 'medium',
            color: '#333',
            marginBottom: 3,
          }}
        >
          Oops! Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: 4,
          }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/')}
          sx={{
            padding: '10px 30px',
            fontSize: '1rem',
            borderRadius: '5px',
            textTransform: 'none',
          }}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;