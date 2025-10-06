import React, { useEffect, useState } from "react";
import NetworkStatus from "./UserOnlineAndOfflineStatus";
import ActivitiesDropDownMenu from "./ActivitiesDropDownMenu";
import Menu from "./Menu/Menu";

const Header = () => {
    return (
        <div className="top-0 right-0 left-0 fixed justify-between shadow-lg z-40 flex  flex-row flex-nowrap py-1 xs:py-1 sm:py-8 md:py-1 lg:py-1 xl:py-1 bg-gradient-to-r from-indigo-600 to-cyan-400  md:flex-row md:mx-0 w-full">
            <Menu />
            <NetworkStatus />
            <ActivitiesDropDownMenu />
        </div>
    )
};
export default Header;