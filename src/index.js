import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

import '@mantine/core/styles.css';

// Create a root for rendering
const root = createRoot(document.getElementById('root'));

// Render the app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);