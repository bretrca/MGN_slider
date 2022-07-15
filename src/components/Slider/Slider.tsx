import React, { useCallback, useEffect, useRef, useState } from "react";
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
    SliderInputContainer
} from "./Slider-styled";
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

    const range = useRef<HTMLDivElement>(null);

    const handleTick = (value: number, range: any, direction: string) => {
        const rangeOfElementsToShow = [...range, min, max]
        const rangeSorted = rangeOfElementsToShow.sort((a: number, b: number) => a - b);
        if (direction === "min") {
            const nextStep = rangeSorted.find((step: any) => {
                return step >= value || step === min && step;
            });
            return nextStep;
        } else {

            const nextStep = rangeSorted.find((step: any) => {
                return step >= value || step === max && step;
            });
            return nextStep;
        }
    };

    const handleMinValue = (e: any) => {
        const valuemin = Math.min(Number(e.target.value), maxVal - 1);
        if (lockedStep) {
            setMinVal(handleTick(valuemin, rangeOfValues, "min"));
            minValRef.current = handleTick(valuemin, rangeOfValues, "min");
        } else {
            setMinVal(valuemin);
            minValRef.current = valuemin;
        }
    };

    const handleMaxValue = (e: any) => {
        const valueMax = Math.max(Number(e.target.value), minVal + 1);
        if (lockedStep) {
            setMaxVal(handleTick(valueMax, rangeOfValues, "max"));
            maxValRef.current = handleTick(valueMax, rangeOfValues, "max");
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
