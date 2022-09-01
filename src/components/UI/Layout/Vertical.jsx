import React from "react";

export default function ({
                             children,
                             alignItems = "center",
                             width = "100%"
                         }) {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            width: width,
            alignItems: alignItems,
        }}>
            {children}
        </div>
    )

}