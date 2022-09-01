import React from "react";

export default function(props) {
    const {children} = props

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
        }}>
            {children}
        </div>
    )
}