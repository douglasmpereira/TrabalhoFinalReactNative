import { StyleSheet, Text, View, TextInput, SafeAreaView} from "react-native";

const CaixaInput=({titulo, place, variavel, setVariavel})=> {
    return(

        <View>
            <Text style = {styles.titulo}>{titulo}</Text>
            <TextInput style={styles.input} placeholder={place}  value={variavel}
              onChangeText={text => setVariavel(text)} />
        </View>
    )
}
export default CaixaInput;

const styles = StyleSheet.create({
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 160
  },
  titulo: {
    fontSize: 20,
    marginStart: 12,
    marginBottom: -10,
    
  }
});