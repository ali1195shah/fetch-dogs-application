// import React from "react";
// import Login from "./components/login.tsx";
// import DogList from "./components/DogList.tsx"

// function MyButton({ title }: { title: string }) {
//   return (
//     <button>{title}</button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton title="I'm a button" />
//       <Login />
//       <DogList dogs={[]}  />
//     </div>
//   );
// }


// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.tsx';
import DogList from './components/DogList.tsx';
import NotFound from './components/NotFound.tsx';
import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<DogList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;