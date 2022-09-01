import React from "react";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

export default function(props) {
    return (
        <div style={{
            width: "100vw",
            height: "96vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            marginTop: "2vh",
            marginBottom: "2vh"
        }}>
            <PageHeader/>
            {props.children}
            <PageFooter/>
        </div>
    );
}