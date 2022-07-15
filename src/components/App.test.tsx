import React from "react";
import { render, screen } from "@testing-library/react";


let container: any;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
describe("Load the API", () => {
    it("Render the data", () => {
        render(<div>
            <h1>Range Controller Component</h1>
        </div>, container);
        const header = screen.getByText("Range Controller Component");
        expect(header).toBeInTheDocument();
    })

})