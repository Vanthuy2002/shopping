import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CurrentLayout from 'src/Layout';
import Loading from 'src/modules/Effect';

const Home = lazy(() => import('src/Pages/Home'));
const Register = lazy(() => import('src/Pages/Register'));
const Login = lazy(() => import('src/Pages/Login'));
const CategoryDetails = lazy(() => import('src/Pages/Category'));
const DetailsProduct = lazy(() => import('src/Pages/DetailsProduct'));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<CurrentLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='category/:slug' element={<CategoryDetails />} />
          <Route path='product/:id' element={<DetailsProduct />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
