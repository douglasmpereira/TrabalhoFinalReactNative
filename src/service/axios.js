import api from "./api";

export const getProdutos = async () => {
    const { data } = await api.get("produtos")
    return data
}

export const getProdutosId = async (id) => {
    const { data } = await api.get(`produtos/${id}`)
    return data
}