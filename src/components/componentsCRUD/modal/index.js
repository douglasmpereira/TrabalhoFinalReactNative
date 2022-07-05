import React, { useState } from "react";
import { Alert, StyleSheet, Text, Pressable, View, TextInput, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import CaixaInput from "./caixaInput";
import CaixaInput2 from "./caxinhaInput2";


import Modal from "react-native-modal";

const ModalList = ({toggleModal, isModalVisible, nome,
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
  salvar,})=> {


    return (

      <View style={{ flex: 1 }}>
        <Modal style={styles.modalView} isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text style={{fontSize: 30, marginBottom: 15,textAlign: "center"}}>Detalhes do Item:</Text>
                <View style={{ flex: 1 }}>
                <View >
                  <CaixaInput2 titulo = {"Nome"} place = {"Ex: Iphone-XR"} variavel={nome} setVariavel={setNome}/>
                  <CaixaInput2 titulo = {"Descrição"} place = {"Smartphone Apple"} variavel={descricao} setVariavel={setDescricao}/>
                </View>
                <View style={{flexDirection:"row"}}>
                  <CaixaInput titulo = {"Custo"}  place = {"R$: 5.000"} variavel={custo} setVariavel={setCusto}/>
                  <CaixaInput titulo = {"Categoria"}/>
                </View>
                <View style={{flexDirection:"row"}}>
                  <CaixaInput titulo = {"Preço Unit"} place = {"R$: 7.000"} variavel={preco} setVariavel={setPreco}/>
                  <CaixaInput titulo = {"Qtd. Estoque"} place = {"15"} variavel={quantidade} setVariavel={setQuantidade}/>
                </View>
                </View>
           <View style={{  flexDirection: "row", justifyContent: "flex-end"}}>
              <TouchableOpacity onPress={toggleModal} style={[styles.botoes, {backgroundColor: "green"}]}>
                <Text>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal} style={[styles.botoes, {backgroundColor: "red"}]}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              </View>
          </View>
        </Modal>
    </View>
  )
}
    
    const styles = StyleSheet.create({
      centeredView: {
        marginTop: 200,
        justifyContent: 'center',
        alignItems: "center",
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      botoes: {
        justifyContent: "center",
        alignItems:"center",
        width: 80,
        height: 40,
        margin: 12,
        borderRadius: 10

      }
    });

    export default ModalList;