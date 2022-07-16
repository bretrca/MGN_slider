import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import { Container } from "./App-styled";
import { getData } from "../utils/utils";
import { useNavigate, useParams, Route, Routes } from "react-router-dom";
const App = () => {
    const [data, setData] = useState<{ min: number, max: number }>();
    const [listedData, setListedData] = useState<number[]>();

    useEffect(() => {
        getData(setData, setListedData)
    }, [])
    const navigate = useNavigate();
    const { exercise1, exercise2 } = useParams();
    const handleNavigate = (route: string) => {
        navigate(route);
    }

    return (
        <Container>


            <h1>Range Controller Component</h1>

            <button onClick={() => handleNavigate("/ex1")}>Exercise 1</button>
            <button onClick={() => handleNavigate("/ex2")}>Exercise 2</button>




        </Container>


    )
}
export default App;