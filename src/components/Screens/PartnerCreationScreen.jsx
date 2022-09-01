import React from "react";
import WithFooterAndHeader from "../UI/Page/WithFooterAndHeader";
import TextInput from "../UI/Form/TextInput";
import Vertical from "../UI/Layout/Vertical";

import {Form, Formik} from "formik";
import Title from "../UI/UIComponents/Title";

export default function (props) {
    return (
        <WithFooterAndHeader>
            <Formik initialValues={{login: "", pwd: "", confirmPwd: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }}
                    validate={values => {
                        const errors = {};

                        if (!values.login) {
                            errors.login = "Обязательное поле"
                        }

                        if (!values.pwd) {
                            errors.pwd = "Обязательное поле"
                        }

                        if (values.pwd !== values.confirmPwd) {
                            errors.confirmPwd = "Пароли не совпадают"
                        }
                        return errors
                    }}
            >
                {({isSubmitting, dirty, handleReset}) => (
                    <Form>
                        <Vertical>
                            <Title text={"Добавить партнёра"}/>

                            <TextInput label="Логин:" name={"login"}/>
                            <TextInput label="Пароль" name={"pwd"} type={"password"}/>
                            <TextInput label="Ещё раз пароль:" name={"confirmPwd"} type={"password"}/>

                            <button type="submit" disabled={isSubmitting}>
                                Сохранить
                            </button>
                        </Vertical>
                    </Form>
                )}
            </Formik>
        </WithFooterAndHeader>
    )
}