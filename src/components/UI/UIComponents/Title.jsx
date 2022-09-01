import React from "react";

export default function (props) {
    const {text} = props


    return (
        <div style={{
            fontWeight: "bold",
            fontSize: "10vw",
            textAlign: "center"
        }}>
            {text}
        </div>
    );
}