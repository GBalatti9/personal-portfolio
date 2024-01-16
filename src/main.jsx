import React from 'react';
import ReactDOM from 'react-dom/client';
import { PorfolioApp } from './PorfolioApp.jsx';
import { ColorProvider } from './theme/context/ColorProvider.jsx';

import './index.css';

import i18next from './translation/i18n.js';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorProvider>
      <I18nextProvider i18n = { i18next }>
        <PorfolioApp />
      </I18nextProvider>
    </ColorProvider>
  </React.StrictMode>,
)
