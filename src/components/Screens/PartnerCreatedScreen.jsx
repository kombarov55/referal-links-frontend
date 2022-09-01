import React from "react";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import Title from "../UI/UIComponents/Title";
import Button from "../UI/UIComponents/Button";
import {useNavigate, useSearchParams} from "react-router-dom";
import Label from "../UI/UIComponents/Label";
import PageContent from "../UI/Layout/PageContent";

export default function (props) {
    const navigate = useNavigate()
    const [params] = useSearchParams()

    return (
        <WithFooterAndHeader>
            <PageContent alignItems={"flex-start"}
                         justifyContent={"flex-start"}
            >
                <Title text={"Партнёр создан."}/>

                <Label text={`Логин: ${params.get("login")}`}/>
                <Label text={`Номер партнёра: ${params.get("id")}`}/>
                <Label text={`Ссылка на регистрацию: ${params.get("register_link")}`}/>

                <Button text={"Готово"} onClick={() => navigate("/manager_home")}/>
            </PageContent>
        </WithFooterAndHeader>
    )
}