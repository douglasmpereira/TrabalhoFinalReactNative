import api from "./api";

export const getProdutos = async () => {
    const { data } = await api.get("produtos")
    return data
}