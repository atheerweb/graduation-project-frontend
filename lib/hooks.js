import { useState, useEffect } from "react";
import client from "./client";

export const useApi = (endpoint) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        client.get(endpoint)
        .then(response => setData(response.data));
    }, [endpoint]);

    return data;

}