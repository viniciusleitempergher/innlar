import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.10.204.194:8080"
}) 