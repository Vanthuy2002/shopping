import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from 'src/modules/Effect';

const Home = lazy(() => import('src/Pages/Home'));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
