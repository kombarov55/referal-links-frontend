import React from "react";
import PageContent from "../UI/Layout/PageContent";
import Label from "../UI/UIComponents/Label";
import {useSearchParams} from "react-router-dom";
import {BsInstagram, BsTelegram, BsWhatsapp} from "react-icons/bs";

export default ({}) => {
    const [params] = useSearchParams();

    return <>
        <PageContent alignItems={"flex-start"}>
            <Label size={"big"} text={"Спасибо за регистрацию!"}/>
            <Label text={`Ваш номер телефона (${params.get("phone")}) будет являться номером пользователя.`}/>
            <Label
                text={`Теперь вы можете оформить заказ или задать вопрос нашему менеджеру в удобном для вас приложении: (для перехода нажмите на кнопку)`}/>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "justifyContent",

                width: "100%",
                gap: "3vw"
            }}>
                <a href={"https://www.instagram.com/vikupbrendov.rf/"}
                   style={{color: "black", textDecoration: "none"}}>
                    <BsInstagram style={{"height": "3vmax", width: "3vmax"}}/>
                </a>
                <a href={"https://api.whatsapp.com/send/?phone=79277809082"}
                   style={{color: "black", textDecoration: "none"}}>
                    <BsWhatsapp style={{"height": "3vmax", width: "3vmax"}}/>
                </a>
                <a href={"https://t.me/vykupbrandrf"}
                   style={{color: "black", textDecoration: "none"}}>
                    <BsTelegram style={{"height": "3vmax", width: "3vmax"}}/>
                </a>
            </div>
        </PageContent>
    </>
}