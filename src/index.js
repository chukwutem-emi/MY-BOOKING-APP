import "./index.css"
import {createRoot} from "react-dom/client";
import App from "./App";
import React from "react";

const root = createRoot(document.getElementById("root"))
root.render(
    <App />
)
const service = () => {
    navigator.serviceWorker.register(new URL("./sw.js", import.meta.url)).then((reg) => {
        console.log("SERVICE-REGISTERED:", reg);
    }, (err) => {
        console.error("Service worker registration failed:", err);
    })
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", service)
};

