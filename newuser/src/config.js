import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://my-pizza.onrender.com/"
})
