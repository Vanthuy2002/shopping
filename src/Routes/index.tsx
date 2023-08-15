import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CurrentLayout from 'src/Layout';
import Loading from 'src/modules/Effect';

const Home = lazy(() => import('src/Pages/Home'));
const Register = lazy(() => import('src/Pages/Register'));
const Login = lazy(() => import('src/Pages/Login'));
const CategoryDetails = lazy(() => import('src/Pages/CategoryDetail'));
const DetailsProduct = lazy(() => import('src/Pages/DetailsProduct'));
const Category = lazy(() => import('src/Pages/Category'));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<CurrentLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='category' element={<Category />} />
          <Route path='category/:slug' element={<CategoryDetails />} />
          <Route path='product/:id' element={<DetailsProduct />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
