import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};
export default AppLayout;