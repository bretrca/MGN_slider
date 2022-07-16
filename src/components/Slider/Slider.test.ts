import React from "react";
import { render, screen } from "@testing-library/react";
import { SliderInputLeft } from "./Slider-styled";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Slider from "./Slider";

let container: any;
beforeEach(() => {
  container = document.createElement("input");
  document.body.appendChild(container);
});

describe("Slider component renders", () => {
  it("container renders", () => {
    const handleMinValue = jest.fn();
    // const container = render(  );
    expect(container).toMatchSnapshot();
  });
});
