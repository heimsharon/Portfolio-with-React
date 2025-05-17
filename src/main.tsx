// filepath: src/main.tsx
// This file is the entry point for the React application. It sets up the main rendering logic and wraps the App component with necessary providers.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './styles/style.css';

// Entry point: Render the App component inside the root element
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* Enable client-side routing */}
        <BrowserRouter>
            {/* Main application component */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
