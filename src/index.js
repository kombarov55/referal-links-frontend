import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {Route, Routes} from "react-router";
import LoginScreen from "./components/Screens/LoginScreen";
import './index.css'
import ManagerHomeScreen from "./components/Screens/ManagerHomeScreen";
import PartnerCreationScreen from "./components/Screens/PartnerCreationScreen";
import PartnerCreatedScreen from "./components/Screens/PartnerCreatedScreen";
import PartnerSearchScreen from "./components/Screens/PartnerSearchScreen";
import RegisterClient from "./components/Screens/RegisterClientScreen";
import ClientCreatedScreen from "./components/Screens/ClientCreatedScreen";
import ClientSearchScreen from "./components/Screens/ClientSearchScreen";
import SelectPartnerScreen from "./components/Screens/SelectPartnerScreen";
import AddPointsScreen from "./components/Screens/AddPointsScreen";
import BonusesAddedScreen from "./components/Screens/BonusesAddedScreen";
import RemoveBonuses from "./components/Screens/BonusesRemovedScreen";
import BonusHistoryScreen from "./components/Screens/BonusHistoryScreen";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={"/login"} element={<LoginScreen/>}/>
            <Route path={"/manager_home"} element={<ManagerHomeScreen/>}/>
            <Route path={"/partner_creation"} element={<PartnerCreationScreen/>}/>
            <Route path={"/partner_created"} element={<PartnerCreatedScreen/>}/>
            <Route path={"/partner_search"} element={<PartnerSearchScreen/>}/>
            <Route path={"/register_client"} element={<RegisterClient/>}/>
            <Route path={"/client_created"} element={<ClientCreatedScreen/>}/>
            <Route path={"/client_search"} element={<ClientSearchScreen/>}/>
            <Route path={"/select_partner"} element={<SelectPartnerScreen/>}/>
            <Route path={"/add_points"} element={<AddPointsScreen/>}/>
            <Route path={"/bonuses_added"} element={<BonusesAddedScreen/>}/>
            <Route path={"/bonuses_removed"} element={<RemoveBonuses/>}/>
            <Route path={"/bonus_history"} element={<BonusHistoryScreen/>}/>
        </Routes>
    </BrowserRouter>,
    rootElement
);
