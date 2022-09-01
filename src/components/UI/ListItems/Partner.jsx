import React from "react";
import Label from "../UIComponents/Label";
import Horizontal from "../Layout/Horizontal";
import Button from "../UIComponents/Button";

export default ({dto}) => {
    const {login, id, points, registerLink} = dto

    return (
        <div key={id} style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
            padding: "1vmax"
        }}>
            <Label size={"medium"}
                   text={login}
            />

            <Label size={"small"}
                   text={`Код пользователя: ${id}`}
            />

            <Label size={"small"}
                   text={`Очков: ${points}`}
            />

            <Label size={"small"}
                   text={`Ссылка для регистрации клиентов: ${registerLink}`}
            />
            <Horizontal>
                <Button text={"История операций"} width={"45%"} fontSize={"1vmax"}/>
                <Button text={"Обнулить очки"} width={"45%"} fontSize={"1vmax"}/>
            </Horizontal>
        </div>
    )
}