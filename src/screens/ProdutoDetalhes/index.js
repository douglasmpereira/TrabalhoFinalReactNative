import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getProdutosId } from "../../service/axios";


const ProdutoDetalhes = ( route ) => {
    const {produtoId} = route.params
    const [produto, setProduto] = useState(null)

    useEffect(() => {
        const get = async () => {
          const produto = await getProdutosId(produtoId);
          setProduto(produto);
        };
        get()
      }, []);

    return(
        <View>
            {produto && produto.map((produto, index) => 
                <Text key={index}>
                    {produto.nomeProduto} {"\n"} 
                    {produto.custo} {"\n"} 
                    {produto.precoUnitario} {"\n"} 
                    {produto.quantidadeEstoque} {"\n"} 
                    {produto.categoria.idCategoria} {"\n"} 
                </Text>
            )}
        </View>
    )
}

export default ProdutoDetalhes