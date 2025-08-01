import { configureStore } from "@reduxjs/toolkit";
import subscribe from "./features/subscribe";

export const store = configureStore({
    reducer: {
        subscribe,
    },
});