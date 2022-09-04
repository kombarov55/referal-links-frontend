import React from "react";

export default ({text, size = "medium", textAlign = "start"}) => {
    let fontSize = "";

    switch (size) {
        case "medium":
            fontSize = "4vmin"
            break;
        case "small":
            fontSize = "1vmax"
            break;
        case "big":
            fontSize = "8vmin"
            break;
    }
    return (
        <div style={{
            fontSize: fontSize,
            textAlign: textAlign
        }}>
            {text}
        </div>
    )
}