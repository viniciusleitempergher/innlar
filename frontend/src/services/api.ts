import axios from "axios";

export const api = axios.create({
    baseURL: "http://191.253.112.252:8080"
});