import React, { useEffect, useState } from "react";
import { getData } from "../../utils/utils";
import Slider from "../Slider/Slider";

const SliderContainer = (withSteps: any) => {

    const [data, setData] = useState<{ min: number, max: number }>();
    const [listedData, setListedData] = useState<number[]>();
    useEffect(() => {
        getData(setData, setListedData)
    }, [])

    return <>

        {
            data !== undefined && withSteps.withSteps == false &&
            <Slider min={data.min} max={data.max} step={0} inputAvailable={true} lockedStep={false} />

        }
        {
            listedData !== undefined && data !== undefined && withSteps.withSteps === true &&
            <Slider min={data.min} max={data.max} step={0.001} rangeOfValues={listedData.values!} inputAvailable={false} lockedStep={true} />

        }
    </>

}

export default SliderContainer;