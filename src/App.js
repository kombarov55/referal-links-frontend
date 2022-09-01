import './App.css';
import React from "react";
import {Link, useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate()

    navigate("/login")

    return (
        <div className="App">
            <h1>hello woirld</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to={"/home"}>home</Link>
                <br/>
                <Link to={"/about"}>about</Link>
            </nav>
        </div>
    );
}

export default App;
