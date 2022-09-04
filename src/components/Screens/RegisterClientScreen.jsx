import React, {useEffect, useState} from "react";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import {Form, Formik} from "formik";
import TextInput from "../UI/Form/TextInput";
import Vertical from "../UI/Layout/Vertical";
import Label from "../UI/UIComponents/Label";
import axios from "axios";
import Links from "../../Util/Links";
import {useNavigate, useSearchParams} from "react-router-dom";
import IsValidPhone from "../../Util/IsValidPhone";
import IsValidIndex from "../../Util/IsValidIndex";
import PageContent from "../UI/Layout/PageContent";

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
            phone: "",
            fio: "",
            address: "",
            region: "",
            postIndex: "",
            email: "",
            country: "Россия"
        }} onSubmit={(values) => {
            values.partnerId = params.get("partnerid")
            axios.post(Links.addClient, values)
                .then(rs => navigate(`/client_created?phone=${rs.data.phone}`))
        }}
                validate={values => {
                    const errors = {}

                    for (let key of Object.keys(values)) {
                        if (values.hasOwnProperty(key) && values[key] == "") {
                            errors[key] = "Обязательное поле"
                        }
                    }

                    if (!IsValidPhone(values.phone)) {
                        errors.phone = "Неверно введён номер телефона. Укажите без кода страны."
                    }

                    if (!IsValidIndex(values.postIndex)) {
                        errors.postIndex = "Неверно указан индекс. Должно быть 6 цифр."
                    }

                    return errors
                }}>
            {() => (
                <WithFooterAndHeader>
                    <PageContent justifyContent={"flex-start"}>
                        <Form>
                            <Label text={"Новый пользователь"} size={"big"} textAlign={"center"}/>
                            <br/>
                            <Vertical alignItems={"stretch"} width={"80vw"}>
                                <TextInput label={"Номер телефона (без кода страны):*"} name="phone"/>
                                <TextInput label={"Фамилия, Имя:*"} name="fio"/>
                                <TextInput label={"Адрес (Улица, номер дома, номер квартиры):*"} name="address"/>
                                <TextInput label={"Область:*"} name={"region"}/>
                                <TextInput label={"Индекс:*"} name="postIndex"/>
                                <TextInput label={"Email:*"} name="email" type={"email"}/>

                                {/*custom button style*/}
                                <button type="submit" style={{
                                    "display": "inline-block",
                                    "padding": "6px 12px",
                                    "marginBottom": "0",
                                    "fontSize": "14px",
                                    "fontWeight": "normal",
                                    "lineHeight": "1.42857143",
                                    "textAlign": "center",
                                    "whiteSpace": "nowrap",
                                    "verticalAlign": "middle",
                                    "MsTouchAction": "manipulation",
                                    "touchAction": "manipulation",
                                    "cursor": "pointer",
                                    "WebkitUserSelect": "none",
                                    "MozUserSelect": "none",
                                    "MsUserSelect": "none",
                                    "userSelect": "none",
                                    "backgroundImage": "none",
                                    "border": "1px solid transparent",
                                    "borderRadius": "4px",
                                    width: "30vw",
                                    alignSelf: "center"
                                }}>
                                    ОТПРАВИТЬ
                                </button>
                            </Vertical>
                        </Form>
                    </PageContent>
                </WithFooterAndHeader>
            )}
        </Formik>
    )
}