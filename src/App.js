import './App.css';
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import 'primeicons/primeicons.css';

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/login")
    })
}

export default App;
