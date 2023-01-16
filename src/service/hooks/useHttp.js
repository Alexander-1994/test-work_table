import { useCallback } from "react";

export const useHttp = () => {
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const result = await fetch(url, {method, body, headers});

            if (!result.ok) {
                throw new Error(`Could not fetch ${url}, status: ${result.status}`);
            }

            const data = await result.json();
            return data;
        } catch(error) {
            throw error;
        }
    }, []);

    return request;
}