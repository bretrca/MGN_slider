import styled from "styled-components";
const ContainerSlider = styled.div`
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderInput = styled.input`
  pointer-events: none;
  position: absolute;
  outline: none;
  width: 90vw;
  height: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    background: white;
    border: 4px solid #fd5631;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #c4c4c4;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
  &::-webkit-slider-thumb:hover {
    background: #fd5634;
    transform: scale(1.5);
    cursor: grab;
  }
  &::-webkit-slider-thumb:active {
    transform: scale(1.5);
  }
`;
const SliderBar = styled.div`
  position: relative;
  width: 90vw;
  height: 0;
  margin: 0 auto;
`;
const SliderBarLine = styled.div`
  position: absolute;
`;
const SliderTrackContainer = styled(SliderBarLine)`
  border-radius: 6px;
  height: 5px;
`;
const SliderTrack = styled(SliderTrackContainer)`
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;

const SliderRange = styled(SliderTrackContainer)`
  background-color: #4c7a16;
  z-index: 2;
`;

const SliderInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;
const SliderLeftInput = styled.input`
  width: 2.5rem;
  border: none;
  color: #4c7a16;
  background-color: transparent;
  text-align: end;
`;
const SliderRightInput = styled.input`
  width: 3rem;
  text-align: end;
  border: none;
  color: #4c7a16;
  background-color: transparent;
`;
const SliderInputLeft = styled(SliderInput)`
  z-index: 5;
  z-index: ${(props: any) => props.min! > props.max! - 100 && "5"};
`;
const SliderInputRight = styled(SliderInput)`
  z-index: 4;
`;
export {
  ContainerSlider,
  SliderInputContainer,
  SliderBar,
  SliderLeftInput,
  SliderRightInput,
  SliderTrack,
  SliderRange,
  SliderInputLeft,
  SliderInputRight
};
