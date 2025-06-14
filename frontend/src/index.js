// frontend/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
// CI test 2
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);