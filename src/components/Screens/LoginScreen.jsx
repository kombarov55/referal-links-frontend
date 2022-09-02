import React, {useRef} from "react"
import Title from "../UI/UIComponents/Title";
import TextInput from "../UI/Form/TextInput";
import {useNavigate} from "react-router-dom";
import PageContent from "../UI/Layout/PageContent";
import {Form, Formik} from "formik";
import SubmitButton from "../UI/Form/SubmitButton";
import axios from "axios";
import Links from "../../Util/Links";
import {Toast} from "primereact/toast";

export default function (props) {
    const navigate = useNavigate()
    const toast = useRef()

    return (
        <Formik initialValues={{login: "", pwd: ""}}
                onSubmit={(values, {setSubmitting}) => {
                    axios.post(Links.login, values)
                        .then(rs => {
                            if (rs.data.found) {
                                navigate("/manager_home")
                            } else {
                                alert("Неправильный логин/пароль")
                                setSubmitting(false)
                            }
                        })
                }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Toast ref={toast}/>
                    <PageContent alignItems={"stretch"}>
                        <Toast ref={toast}/>
                        <Title text={"Авторизация"}/>
                        <TextInput label={"Логин:"} name={"login"}/>
                        <TextInput label={"Пароль:"} type="password" name={"pwd"}/>
                        <SubmitButton text={"Вход"}/>
                    </PageContent>
                </Form>
            )}
        </Formik>
    )
}