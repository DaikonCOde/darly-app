import React from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NavAdminMenu from "../Components/NavAdminMenu/NavAdminMenu";

import { ContentDashboardLayout } from "./LayoutStyles";

const Dashboard = () => {

  const { currentUser } = useSelector( (state) => state.users);
  console.log(currentUser);

  // return !currentUser 
  //     ? <Navigate to='/' />
  //     : <ContentDashboardLayout>
  //         <NavAdminMenu />
  //         <main>
  //           <Outlet />
  //         </main>
  //       </ContentDashboardLayout>

  return (
    <ContentDashboardLayout>
          <NavAdminMenu />
          <main>
            <Outlet />
          </main>
    </ContentDashboardLayout>
  )

};

export default Dashboard;