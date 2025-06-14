// frontend/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
// CI test 1
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);