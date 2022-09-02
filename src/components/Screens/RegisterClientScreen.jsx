import React, {useEffect, useState} from "react";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import {Field, Form, Formik} from "formik";
import SubmitButton from "../UI/Form/SubmitButton";
import TextInput from "../UI/Form/TextInput";
import Vertical from "../UI/Layout/Vertical";
import Label from "../UI/UIComponents/Label";
import axios from "axios";
import Links from "../../Util/Links";
import {useNavigate, useSearchParams} from "react-router-dom";

export default function ({}) {
    const [countries, setCountries] = useState([])
    const [params] = useSearchParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(Links.countries)
            .then(rs => setCountries(rs.data))
    }, [])

    return (
        <Formik initialValues={{
            login: "",
            pwd: "",
            confirmPwd: "",
            lastName: "",
            firstName: "",
            middleName: "",
            address: "",
            postIndex: "",
            email: "",
            phone: "",
            country: "Россия"
        }} onSubmit={(values) => {
            values.partnerId = params.get("partnerid")
            axios.post(Links.addClient, values)
                .then(rs => navigate(`/client_created?id=${rs.data.id}&email=${rs.data.email}`))
        }}
        validate={values => {
            const errors = {}

            for (let key of Object.keys(values)) {
                if (values.hasOwnProperty(key) && values[key] == "") {
                    errors[key] = "Обязательное поле"
                }
            }

            if (values.pwd !== values.confirmPwd) {
                errors.confirmPwd = "Пароли не совпадают"
            }

            return errors
        }}>
            {() => (
                <WithFooterAndHeader>
                    <Form>
                        <Label text={"Регистрация клиента"} size={"big"} textAlign={"center"}/>
                        <Vertical alignItems={"stretch"} width={"90vw"}>
                            <TextInput label={"Логин:"} name="login"/>
                            <TextInput label={"Пароль:"} name="pwd" type={"password"}/>
                            <TextInput label={"Ещё раз пароль:"} name="confirmPwd" type={"password"}/>
                            <TextInput label={"Фамилия:"} name="lastName"/>
                            <TextInput label={"Имя:"} name="firstName"/>
                            <TextInput label={"Отчество:"} name="middleName"/>
                            <TextInput label={"Адрес:"} name="address"/>
                            <TextInput label={"Индекс:"} name="postIndex"/>
                            <TextInput label={"Email:"} name="email" type={"email"}/>
                            <TextInput label={"Телефон:"} name="phone"/>
                            <label>Страна по умолчанию:</label>
                            <Field as={"select"} name={"country"}>
                                {countries.map(v => <option value={v}>{v}</option>)}
                            </Field>
                            <SubmitButton text={"Сохранить"}/>
                        </Vertical>
                    </Form>
                </WithFooterAndHeader>
            )}
        </Formik>
    )
}