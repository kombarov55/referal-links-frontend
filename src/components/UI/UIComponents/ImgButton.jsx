import React from "react";

export default props => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "3vw",

        border: "2px solid black",
        padding: "0.5vmax 0.7vmax",
        fontWeight: "bold"
    }}>
        {props.icon}
        <div style={{fontSize: "3vmax"}}>{props.text}</div>
    </div>
)