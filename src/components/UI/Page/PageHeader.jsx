import React from "react";
import UserIcon from "../Icons/UserIcon";
import ImgButton from "../UIComponents/ImgButton";

export default props => (
    <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "3vw",
        justifyContent: "flex-end",

        width: "95vw"
    }}>
        <ImgButton icon={<UserIcon/>} text={"Профиль"}/>
    </div>

)
