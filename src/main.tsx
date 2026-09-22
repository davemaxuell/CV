import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

async function mount() {
  const App = import.meta.env.MODE === 'academic'
    ? (await import('./academic/AcademicPage.tsx')).default
    : (await import('./App.tsx')).default;
  if (import.meta.env.MODE === 'academic') await import('./academic/academic.css');
  else await import('./index.css');
  createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
}
void mount();
