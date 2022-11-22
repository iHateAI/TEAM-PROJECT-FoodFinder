import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/global/Header';

const Main = React.lazy(() => import('../pages/index'));
const Login = React.lazy(() => import('../pages/login'));
const Register = React.lazy(() => import('../pages/register'));
const NotFound = React.lazy(() => import('../components/global/NotFound'));
const Recipe = React.lazy(() => import('../pages/recipe'));

const CustomRouter = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default CustomRouter;
