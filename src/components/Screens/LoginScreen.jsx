import React from "react"
import Title from "../UI/Title";
import Vertical from "../UI/Layout/Vertical";
import TextInput from "../UI/Form/TextInput";
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";

export default function (props) {
    const navigate = useNavigate()

    return (
        <div>
            <Vertical>
                <Title text={"Авторизация"}/>
                <TextInput title={"Логин:"}/>
                <TextInput title={"Пароль:"}/>
                <Button
                    style={{
                        width: "80vw"
                    }}
                    text={"Вход"}
                    onClick={() => navigate("/manager_home")}
                />
            </Vertical>
        </div>
    )
}