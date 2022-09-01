import React from "react";

export default function ({text, disabled}) {
    return (
        <button type="submit" disabled={disabled} style={{
            alignSelf: "center",
            padding: "1vmax 0",
            margin: "0.5vmax 0",
            width: "100%",
            textAlign: "center",
            background: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "2.5vmax",
            border: "1px solid black",
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        }}>
            {text}
        </button>
    )
}