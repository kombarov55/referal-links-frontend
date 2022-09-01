import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import Home from "./components/Screens/Home";
import About from "./components/Screens/About";
import React from "react";
import {Route, Routes} from "react-router";
import LoginScreen from "./components/Screens/LoginScreen";
import './index.css'
import ManagerHomeScreen from "./components/Screens/ManagerHomeScreen";
import PartnerCreationScreen from "./components/Screens/PartnerCreationScreen";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={"/login"} element={<LoginScreen/>}/>
            <Route path={"/manager_home"} element={<ManagerHomeScreen/>}/>
            <Route path={"/partner_creation"} element={<PartnerCreationScreen/>}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);
