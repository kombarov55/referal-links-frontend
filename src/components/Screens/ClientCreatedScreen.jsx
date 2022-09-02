import React from "react";
import PageContent from "../UI/Layout/PageContent";
import Label from "../UI/UIComponents/Label";
import {useSearchParams} from "react-router-dom";

export default ({}) => {
    const [params] = useSearchParams();

    return <>
        <PageContent alignItems={"flex-start"}>
            <Label size={"big"} text={"Вы зарегистрированы"}/>
            <Label text={`Ваш уникальный номер: ${params.get("id")}`}/>
            <Label text={`На вашу почту ${params.get("email")} продублирован ваш идентификатор. При заказе сообщите его менеджеру.`}/>
        </PageContent>
    </>
}