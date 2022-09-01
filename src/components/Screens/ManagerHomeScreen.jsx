import React from "react";
import Vertical from "../UI/Layout/Vertical";
import Button from "../UI/UIComponents/Button";
import {useNavigate} from "react-router-dom";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import ImgButton from "../UI/UIComponents/ImgButton";
export default function(props) {

    const navigate = useNavigate();

    return (
        <WithFooterAndHeader>
            <Vertical>
                <ImgButton iconName={"pi-user-plus"}
                           text={"Добавить партнёра"}
                           onClick={() => navigate("/partner_creation")}
                />

                <ImgButton iconName={"pi-users"}
                           text={"Поиск партнёра"}
                           onClick={() => navigate("/partner_creation")}
                />

                <ImgButton iconName={"pi-plus-circle"}
                           text={"Добавить бонусы"}
                           onClick={() => navigate("/partner_creation")}
                />

                <ImgButton iconName={"pi-search"}
                           text={"Поиск клиентов"}
                           onClick={() => navigate("/partner_creation")}
                />
            </Vertical>
        </WithFooterAndHeader>
    )

}