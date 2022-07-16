import React, { useEffect, useState } from "react";
import { Container, Button } from "./App-styled";
import { getData } from "../utils/utils";
import { useNavigate, useParams, Route, Routes } from "react-router-dom";
const App = () => {
    const [data, setData] = useState<{ min: number; max: number }>();
    const [listedData, setListedData] = useState<number[]>();

    useEffect(() => {
        getData(setData, setListedData);
    }, []);
    const navigate = useNavigate();
    const { exercise1, exercise2 } = useParams();
    const handleNavigate = (route: string) => {
        navigate(route);
    };

    return (
        <Container>
            <h1>Range Controller Component</h1>

            <Button onClick={() => handleNavigate("/ex1")}>Exercise 1</Button>
            <Button onClick={() => handleNavigate("/ex2")}>Exercise 2</Button>
        </Container>
    );
};
export default App;
