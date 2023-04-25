import ReactDOM from 'react-dom/client';
import App from './App';

import { DesktopProvider } from './context/DesktopContext';

import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DesktopProvider>
    <App />
  </DesktopProvider>,
);
