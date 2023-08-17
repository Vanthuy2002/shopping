import { onAuthStateChanged } from 'firebase/auth';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CurrentLayout from 'src/Layout';
import { auth } from 'src/firebase/config';
import Loading from 'src/modules/Effect';
import { useAppStore } from 'src/store';

const Home = lazy(() => import('src/Pages/Home'));
const Register = lazy(() => import('src/Pages/Register'));
const Login = lazy(() => import('src/Pages/Login'));
const CategoryDetails = lazy(() => import('src/Pages/CategoryDetail'));
const DetailsProduct = lazy(() => import('src/Pages/DetailsProduct'));
const Category = lazy(() => import('src/Pages/Category'));
const Profile = lazy(() => import('src/Pages/Profile'));
const SearchResults = lazy(() => import('src/Pages/SearchResults'));

const Routing = () => {
  const setUser = useAppStore((state) => state.setUser);
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    const html = document.documentElement;
    theme === 'Dark'
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
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<CurrentLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='category' element={<Category />} />
          <Route path='category/:slug' element={<CategoryDetails />} />
          <Route path='product/:id' element={<DetailsProduct />} />
          <Route path='search/:slug' element={<SearchResults />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='me/profile' element={<Profile />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
