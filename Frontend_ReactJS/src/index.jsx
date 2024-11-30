// index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import the App component
import './index.css'; // Ensure your styles are included

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App /> {/* All routing and layout logic is inside the App component */}
    </BrowserRouter>
  </StrictMode>
);
