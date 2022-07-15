import React, { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import { Container } from "./App-styled";
import SliderControlled from "./SliderControlled/SliderControlled";

const App = () => {
    const [data, setData] = useState<{ min: number, max: number }>();
    const [listedData, setListedData] = useState<number[]>();
    const getData = () => {
        fetch("https://demo8614250.mockable.io/")
            .then((res) => res.ok ? res.json() : Promise.reject(res))
            .then((json: any) => {
                setData(json["min-max"])
                setListedData(json["listed-values"])
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>
            <h1>Range Controller Component</h1>
            {
                data !== undefined ?
                    <Slider min={data.min} max={data.max} step={0} inputAvailable={true} lockedStep={false} /> :
                    <p>loading</p>
            }

            {
                listedData !== undefined && data !== undefined ?
                    <Slider min={data.min} max={data.max} step={0.001} rangeOfValues={listedData.values!} inputAvailable={false} lockedStep={true} /> :
                    <p>loading</p>
            }

        </Container>
    )
}
export default App;