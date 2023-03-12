import React, {StrictMode} from 'react';
import /*ReactDOM,*/ { createRoot } from 'react-dom/client';
import App from './App';

const rootElemnt = document.getElementById("root");
const root = createRoot(rootElemnt)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

