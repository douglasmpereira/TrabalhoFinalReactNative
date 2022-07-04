import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { getProdutos } from '../../service/axios'

const Produto = ({navigation}) => {
    const [produtos, setProdutos] = useState(null)
    const [loading, setLoading] = useState(true);

    const [teste, setTeste] = useState([
        {nomeProduto: 'laranja', quantidadeEstoque: '5', id:1 },
        {nomeProduto: 'pera', quantidadeEstoque: '10', id:2 },
        {nomeProduto: 'banana', quantidadeEstoque: '4', id:3 },
        {nomeProduto: 'uva', quantidadeEstoque: '32', id:4 },
        {nomeProduto: 'morango', quantidadeEstoque: '3', id:5 },
        {nomeProduto: 'morango', quantidadeEstoque: '3', id:6 },
        {nomeProduto: 'morango', quantidadeEstoque: '3', id:7 },
        {nomeProduto: 'morango', quantidadeEstoque: '3', id:8 },
        {nomeProduto: 'morango', quantidadeEstoque: '3', id:9 },
        {nomeProduto: 'morango', quantidadeEstoque: '3', id:10 },
        {nomeProduto: 'morango', quantidadeEstoque: '3', id:11},
    ])

    const irParaDetalhes = async () => {
        navigation.navigate("ProdutoDetalhes", {
            idproduto: produtos.id
        })
    }

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            const produto = await getProdutos();
            setProdutos(produto);
            setLoading(false);
        }
        get()
    }, [])




    return(
        <View style={styles.container}>
            <FlatList
            //numColumns={2}
            keyExtractor={(item) => item.id}
            data={produtos}
            renderItem= {({ item }) => (
                <View style={{flexDirection: 'row'}}>
                    <View  style={styles.product}>
                        <Text>Produto : {item.nomeProduto}</Text>
                        <Text>Preço : {item.precoUnitario}</Text>
                    </View>
                    {/* <View  style={styles.preco}>
                    </View> */}
                    <View style={styles.estoque}>
                        <Text> Quantidade: {item.quantidadeEstoque}</Text>
                    </View>
                    <TouchableOpacity onPress={irParaDetalhes}>
                        <Text> Ver Detalhes </Text>
                    </TouchableOpacity>
                </View>
            )}
            />
        </View>
    )
}

export default Produto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    product: {
        //flex: 1,
        width: 150,
        height: 100,
        marginTop: 24,
        backgroundColor: 'cyan',
        padding: 30,
        fontSize: 24,
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderEndColor: 'black'
        
    },
    estoque: {
        //flex: 1,
        width: 150,
        height: 100,
        marginTop: 24,
        backgroundColor: 'orange',
        padding: 30,
        fontSize: 24,
        borderBottomEndRadius: 25,
        borderTopEndRadius: 10,
        borderColor: 'black',
        borderStartColor: 'black',
        borderWidth: 2,
        
    },
    preco: {
        //flex: 1,
        width: 150,
        height: 100,
        marginTop: 24,
        backgroundColor: 'cyan',
        padding: 30,
        fontSize: 24,
        borderWidth: 2,
        borderColor: 'black',
        borderEndColor: 'black'
        
    },

})