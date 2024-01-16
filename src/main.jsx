import React from 'react';
import ReactDOM from 'react-dom/client';
import { PorfolioApp } from './PorfolioApp.jsx';
import { ColorProvider } from './theme/context/ColorProvider.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorProvider>
      <PorfolioApp />
    </ColorProvider>
  </React.StrictMode>,
)
