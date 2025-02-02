import axios, { AxiosResponse } from 'axios';
console.log(import.meta.env.VITE_BASE_URL_API);
const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL_API}` || "http://localhost:3001",
});

const getAllRevenues = async (): Promise<AxiosResponse> => {
    try {
        const response = await api.get('/api/v1/revenues');
        return response;
    } catch (err) {
        throw new Error("Erro ao carregar os dados da receita.");
    }
};

export { getAllRevenues };