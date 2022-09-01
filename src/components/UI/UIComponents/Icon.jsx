import React from "react";

export default ({size, name, onClick}) => (

    <i className={"pi " + name} style={{
        fontSize: size,
        marginTop: "0.8vh"
    }} onClick={() => onClick()}/>
)