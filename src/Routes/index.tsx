import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from 'src/modules/Effect';

const Home = lazy(() => import('src/Pages/Home'));
const Register = lazy(() => import('src/Pages/Register'));
const Login = lazy(() => import('src/Pages/Login'));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
