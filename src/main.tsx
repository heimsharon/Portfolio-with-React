import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        {/* Enable client-side routing */}
        <BrowserRouter>
            {/* Main application component */}
            <App />
        </BrowserRouter>
    </StrictMode>
);
