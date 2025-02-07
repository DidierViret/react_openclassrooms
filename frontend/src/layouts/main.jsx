import React from 'react'
import Banner from '../components/Banner'

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (<>
      <div className="flex w-full h-full flex-col pl-4 sm:pl-8 pr-4 sm:pr-8">
        <Banner />
        <Outlet />
      </div>
  </>)
}

export default MainLayout