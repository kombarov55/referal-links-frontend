import React from "react";

export default props => (
    <i className={"pi " + props.name} style={{
        fontSize: props.size,
        marginTop: "0.8vh"
    }}/>
)