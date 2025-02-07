import React from 'react'
import Banner from '../components/Banner'

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (<>
      <div className="flex w-full h-full p-2 sm:p-8">
        <div className="flex w-full h-full flex-col p-2 sm:p-8">
          <Banner />
          <Outlet />
        </div>
      </div>
  </>)
}

export default MainLayout