import React from "react";

export default function (props) {
    const {children} = props

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "center",
            gap: "2vh",

            height: "50vh",
            width: "80vw",
            marginTop: "15vh",
            marginLeft: "10vw"
        }}>
            {children}
        </div>
    )

}