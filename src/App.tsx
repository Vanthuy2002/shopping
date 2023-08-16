import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Routing from './Routes';
import { useAppStore } from './store';
import { useEffect } from 'react';
import { auth } from './firebase/config';
import Toasty from './Layout/Noti';

function App() {
  const setUser = useAppStore((state) => state.setUser);
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    const html = document.documentElement;
    theme === 'dark'
      ? html.classList.add('dark')
      : html.classList.remove('dark');
  }, [theme]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => unsubscribe();
  }, [setUser]);

  return (
    <main className='App'>
      <Routing />
      <Toasty />
    </main>
  );
}

export default App;
