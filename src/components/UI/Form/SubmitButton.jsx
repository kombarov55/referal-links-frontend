import React from "react";

export default function ({text, disabled}) {
    return (
        <button type="submit" disabled={disabled} style={{
            "display": "inline-block",
            "padding": "6px 12px",
            "marginBottom": "0",
            "fontSize": "14px",
            "fontWeight": "normal",
            "lineHeight": "1.42857143",
            "textAlign": "center",
            "whiteSpace": "nowrap",
            "verticalAlign": "middle",
            "MsTouchAction": "manipulation",
            "touchAction": "manipulation",
            "cursor": "pointer",
            "WebkitUserSelect": "none",
            "MozUserSelect": "none",
            "MsUserSelect": "none",
            "userSelect": "none",
            "backgroundImage": "none",
            "border": "1px solid transparent",
            "borderRadius": "4px"
        }}>
            {text}
        </button>
    )
}