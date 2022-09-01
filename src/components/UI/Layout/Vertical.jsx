import React from "react";

export default function ({children, alignItems="center"}) {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            width: "100%",
            alignItems: alignItems,
        }}>
            {children}
        </div>
    )

}