import React from "react"
import Title from "../UI/UIComponents/Title";
import TextInput from "../UI/Form/TextInput";
import {useNavigate} from "react-router-dom";
import PageContent from "../UI/Layout/PageContent";
import {Form, Formik} from "formik";
import SubmitButton from "../UI/Form/SubmitButton";

export default function (props) {
    const navigate = useNavigate()

    return (
        <Formik initialValues={{login: "", pwd: ""}}
                onSubmit={(values) => {
                    console.log(values)
                    navigate("/manager_home")
                }}
        >
            {({isSubmitting}) => (
                <Form>
                    <PageContent alignItems={"stretch"}>
                        <Title text={"Авторизация"}/>
                        <TextInput label={"Логин:"} name={"login"}/>
                        <TextInput label={"Пароль:"} type="password" name={"pwd"}/>
                        <SubmitButton text={"Вход"} disabled={isSubmitting}/>
                    </PageContent>
                </Form>
            )}
        </Formik>
    )
}