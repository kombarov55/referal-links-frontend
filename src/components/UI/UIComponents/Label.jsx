import React from "react";

export default ({text, size = "medium"}) => {
    let fontSize = "";

    switch (size) {
        case "medium":
            fontSize = "5vmin"
            break;
        case "small":
            fontSize = "1vmax"
            break;
        case "big":
            fontSize = "10vmin"
            break;
    }
    return (
        <div style={{
            fontSize: fontSize
        }}>
            {text}
        </div>
    )
}