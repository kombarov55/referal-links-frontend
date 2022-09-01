import React from "react";
import {InputText} from "primereact/inputtext";
import Horizontal from "../Layout/Horizontal";

export default function(props) {
    const {title} = props

    return (
        <Horizontal>
            <div style={{
                fontSize: "1.5vmax"
            }}>{title}</div>
            <InputText />
        </Horizontal>
    )
}