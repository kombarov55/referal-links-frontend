import React from "react";

export default function (props) {
    const {text, onClick} = props

    return (
        <div style={{
            alignSelf: "center",
            padding: "1vmax 0",
            margin: "0.5vmax 0",
            width: "100%",
            textAlign: "center",
            background: "#ffffff",
            color: "black",
            fontWeight: "bold",
            border: "2px solid black"
        }} onClick={() => onClick()}>
            {text}
        </div>
    )
}