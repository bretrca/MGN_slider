import React from "react";
import ReactDOM from "react-dom/client";
import { screen, render } from "@testing-library/react";
import App from "./components/App";
let container: any;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
describe("Load the App", () => {
    it("Render the component App", () => {
        render(<App />, container);
        const header = screen.getByText("Range Controller Component");
        expect(header).toBeInTheDocument();
    })

})