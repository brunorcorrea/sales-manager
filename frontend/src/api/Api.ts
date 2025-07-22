import axios, { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL_API}` || "http://localhost:3001",
});

export default api;

const getAllRevenues = async (): Promise<AxiosResponse> => {
    try {
        const response = await api.get('/api/v1/revenues');
        return response;
    } catch (err) {
        throw new Error("Erro ao carregar os dados da receita.");
    }
};

const getAllGoals = async (): Promise<AxiosResponse> => {
    try {
        const response = await api.get('/api/v1/goals');
        return response;
    } catch (err) {
        throw new Error("Erro ao carregar os dados da meta.");
    }
}

const getAllSales = async (): Promise<AxiosResponse> => {
    try {
        const response = await api.get('/api/v1/sales');
        return response;
    } catch (err) {
        throw new Error("Erro ao carregar os dados das vendas.");
    }
}

export { getAllRevenues, getAllGoals, getAllSales };