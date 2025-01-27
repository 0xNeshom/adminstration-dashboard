import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { AppProvider } from '@toolpad/core/AppProvider';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AppProvider>
);
