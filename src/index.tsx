import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "core-js/features/array/flat-map";
import "core-js/features/map";
import "core-js/features/promise";
import "core-js/features/set";
import "raf/polyfill";
import "whatwg-fetch";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SliderContainer from "./components/SliderContainer/SliderContainer";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />} />
                <Route path="/ex1" element={<SliderContainer withSteps={false} />} />
                <Route path="/ex2" element={<SliderContainer withSteps={true} />} />
            </Routes>

        </BrowserRouter>

    </StrictMode>
);
