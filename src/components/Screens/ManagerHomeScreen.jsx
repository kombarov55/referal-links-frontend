import React from "react";
import Vertical from "../UI/Layout/Vertical";
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";
export default function(props) {

    const navigate = useNavigate();

    return (
        <Vertical>
            <Button text={"Добавить партнёра"} onClick={() => navigate("/partner_creation")}/>
            <Button text={"Поиск партнёра"}/>
            <Button text={"Добавить бонусы"}/>
            <Button text={"Поиск клиентов"}/>
        </Vertical>
    )

}