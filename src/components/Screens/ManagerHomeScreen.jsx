import React from "react";
import Vertical from "../UI/Layout/Vertical";
import Button from "../UI/UIComponents/Button";
import {useNavigate} from "react-router-dom";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
export default function(props) {

    const navigate = useNavigate();

    return (
        <WithFooterAndHeader>
            <Vertical>
                <Button text={"Добавить партнёра"} onClick={() => navigate("/partner_creation")}/>
                <Button text={"Поиск партнёра"}/>
                <Button text={"Добавить бонусы"}/>
                <Button text={"Поиск клиентов"}/>
            </Vertical>
        </WithFooterAndHeader>
    )

}