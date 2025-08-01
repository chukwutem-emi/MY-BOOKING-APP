import React from 'react'
import HomePage from './HomePageDetails';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
  return (
    <div>
      <>
      <HomePage />
      <Outlet />
      </>
    </div>
  )
};
export default HomePageLayout;
