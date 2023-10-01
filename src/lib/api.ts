import { create } from "apisauce";

export const mainApi = create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});