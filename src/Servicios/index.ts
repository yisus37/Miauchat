import axios from "axios";

export default axios.create({
    baseURL: "https://httpbin.org/delay/",
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});
