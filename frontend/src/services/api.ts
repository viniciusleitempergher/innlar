import axios from "axios";

export const api = axios.create({
    baseURL: "http://191.253.101.30:8080"
});