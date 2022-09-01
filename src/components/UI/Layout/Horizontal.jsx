import React from "react";

export default function ({
                             children,
                             justifyContent = "space-around",
                             width = "100%",
                             padding = ""
                         }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: justifyContent,
            width: width,
            padding: padding
        }}>
            {children}
        </div>
    )
}