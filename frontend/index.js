// frontend/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
// CI test 11
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);