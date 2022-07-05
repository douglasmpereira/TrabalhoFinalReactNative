import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { getProdutos } from '../../../services/axiosClient'
import ModalList from '../modal'

const ListaProdutos = ({navigation, produtos, setProdutos, editarProduto, excluirProduto,
    nome,
    setNome,
    custo,
    setCusto,
    preco,
    setPreco,
    descricao,
    setDescricao,
    quantidade,
    setQuantidade,
    categoria,
    setCategoria,
    adicionarProduto,
    editando,
    edit,
    cancelar,
    salvar,}) => {
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
    setModalVisible(!isModalVisible)
    editarProduto();
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
                <View style={styles.box}>
                    <View  style={styles.product}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Produto : {item.nomeProduto}</Text>
                        <Text>Cod. Prod. : {item.id}</Text>
                        <Text>Preço : {item.precoUnitario}</Text>
                        <Text>Quantidade: {item.quantidadeEstoque}</Text>
                    </View>
                    <View>
                     <TouchableOpacity style={[styles.botoes, {marginBottom: 10, backgroundColor: "blue"}]}  onPress={toggleModal} >
                        <Text style={{color: "white"}}>Editar</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.botoes}  onPress={toggleModal} >
                        <Text style={{color: "white"}}>Excluir</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            )}
            />
            <ModalList toggleModal={toggleModal} isModalVisible={isModalVisible} editarProduto={editarProduto} adicionarProduto={adicionarProduto} salvar={salvar} cancelar={cancelar} nome={nome} setNome={setNome} custo={custo} setCusto={setCusto}
    preco={preco} setPreco={setPreco} descricao={descricao} setDescricao={setDescricao}
    quantidade={quantidade} setQuantidade={setQuantidade} categoria={categoria} setCategoria={setCategoria} editando={editando}/>
        </View>
    )
}

export default ListaProdutos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    product: {
        width: "80%",
        height: 80,
        padding: 30,
        justifyContent: "center"  
        
    },
    botoes : {
        backgroundColor: "red",
        width: 60,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        

    },
    box: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 10,
        backgroundColor: "cyan",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10
    }

})