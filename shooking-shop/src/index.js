import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocks/worker';
import { RecoilRoot } from 'recoil';

async function prepare() {
  await worker.start({
    serviceWorker: {
      url: process.env.NODE_ENV === 'production'
        ? '/ShookingShop/mockServiceWorker.js'
        : '/mockServiceWorker.js',
    }
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
}

prepare();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
