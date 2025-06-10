import React from "react";
import { ReactNode } from "react";
import Navbar from "@/component/Navbar";

const Layout = ( {children} : {children : ReactNode } ) => {
    return (
        <div>
             <Navbar />
            {children}
        </div>
    )
}

export default Layout