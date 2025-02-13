import React from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';
import { Outlet } from "react-router";
import { Toaster } from 'react-hot-toast';
const layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </>
    );
};

export default layout;