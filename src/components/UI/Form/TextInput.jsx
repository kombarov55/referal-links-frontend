import React from "react";
import {ErrorMessage, Field} from "formik";

export default
function ({label, name, type="text"}) {
    return (
        <>
            <label style={{fontSize: "3vmin"}}>{label}</label>
            <Field type={type} name={name} style={{height: "4vh"}}/>
            <ErrorMessage name={name} component={"span"} className={"errorMsg"}/>
        </>
    )
}