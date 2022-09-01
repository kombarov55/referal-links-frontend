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
            fontSize: "2.5vmax",
            border: "1px solid black",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }} onClick={() => onClick()}>
            {text}
        </div>
    )
}