import React from "react";
import {ErrorMessage, Field} from "formik";

export default function ({label, name, type="text"}) {
    return (
        <>
            <label>{label}</label>
            <Field type={type} name={name}/>
            <ErrorMessage name={name} component={"span"} className={"errorMsg"}/>
        </>
    )
}