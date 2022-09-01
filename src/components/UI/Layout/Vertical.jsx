import React from "react";

export default function (props) {
    const {children} = props

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",

            width: "80vw",

            marginLeft: "10vw"
        }}>
            {children}
        </div>
    )

}