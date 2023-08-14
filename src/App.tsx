import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Routing from './Routes';
import { useAppStore } from './store';
import { useEffect } from 'react';
import { auth } from './firebase/config';

function App() {
  const setUser = useAppStore((state) => state.setUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [setUser]);

  return (
    <main className='App'>
      <Routing />
    </main>
  );
}

export default App;
