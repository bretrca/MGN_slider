import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import {
    SliderBar,
    SliderInputLeft,
    SliderInputRight,
    ContainerSlider,
    SliderTrack,
    SliderRange,
    SliderLeftInput,
    SliderRightInput,
    SliderInputContainer,
    Button
} from "./Slider-styled";
import { handleTick } from "../../utils/utils";
interface Props {
    min: number;
    max: number;
    step: number;
    lockedStep: boolean;
    inputAvailable: boolean;
    rangeOfValues?: any;
}
const Slider: React.FC<Props> = ({
    min,
    max,
    inputAvailable,
    step,
    rangeOfValues,
    lockedStep
}) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const navigate = useNavigate();
    const range = useRef<HTMLDivElement>(null);

    const handleBack = () => {
        navigate("/");
    }
    const handleMinValue = (e: any) => {
        const valueMin = Math.min(Number(e.target.value), maxVal - 1);
        if (lockedStep) {
            setMinVal(handleTick(valueMin, rangeOfValues, "min", min, max));
            minValRef.current = handleTick(valueMin, rangeOfValues, "min", min, max);
        } else {
            setMinVal(valueMin);
            minValRef.current = valueMin;
        }
    };

    const handleMaxValue = (e: any) => {
        const valueMax = Math.max(Number(e.target.value), minVal + 1);
        if (lockedStep) {
            setMaxVal(handleTick(valueMax, rangeOfValues, "max", min, max));
            maxValRef.current = handleTick(valueMax, rangeOfValues, "max", min, max);
        } else {
            setMaxVal(valueMax);
            maxValRef.current = valueMax;
        }
    };
    const getPercent = useCallback(
        (value: any) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <ContainerSlider>
            <Button onClick={handleBack}>Back</Button>

            <SliderInputLeft
                id="slider1"
                type="range"
                min={min}
                max={max}
                value={minVal}
                step={step}
                onChange={handleMinValue}
            />
            <SliderInputRight
                id="slider2"
                type="range"
                min={min}
                max={max}
                value={maxVal}
                step={step}
                onChange={handleMaxValue}
            />

            <SliderBar>
                <SliderTrack />
                <SliderRange ref={range} />
                <SliderInputContainer>
                    <div>
                        <SliderLeftInput
                            type="number"
                            value={minVal}
                            min={min}
                            onChange={handleMinValue}
                            disabled={!inputAvailable}
                        />{" "}
                        <i>€</i>
                    </div>
                    <div>
                        <SliderRightInput
                            type="number"
                            value={maxVal}
                            max={max}
                            onChange={handleMaxValue}
                            disabled={!inputAvailable}
                        />{" "}
                        <i>€</i>
                    </div>
                </SliderInputContainer>
            </SliderBar>
        </ContainerSlider>
    );
};

export default Slider;
