import React, { useContext } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import { Header, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PeliculasContext } from '../Navigations/PeliculasContext';

const Compra = ({ navigation }) => {
    const { compra, calcular, eliminarCompra, comprar } = useContext(PeliculasContext);
    let ScreenHeight = Dimensions.get("window").height;
    ScreenHeight = (ScreenHeight * .78);

    return (
        <View style={styles.container2}>
            <Header
                centerComponent={{ text: 'Carrito', style: { color: 'white', fontSize: 20 } }}
                containerStyle={{ borderBottomColor: 'black', borderBottomWidth: 3 }}
            />
            <View style={styles.container}>
                <Text style={styles.textos}>{compra.nombre}({compra.idioma})</Text>
                <Text style={styles.textos}>Hora: {compra.horario}</Text>
                <SafeAreaView>
                    <View style={styles.inputView}>
                        <Text style={styles.textos}>Cantidad: </Text>
                        <TextInput
                            onChangeText={(e) => { calcular(e, compra) }}
                            maxLength={40}
                            placeholder="..."
                            keyboardType='numeric'
                        />
                    </View>
                </SafeAreaView>
                <Text style={styles.textos}>Total: ${compra.total}.00</Text>
                <View>

                    <Button
                        buttonStyle={{ backgroundColor: 'red'}}
                        title="Cancelar"
                        onPress={() => (
                            eliminarCompra(),
                            navigation.goBack()
                        )}
                    />
                </View>
                <View>
                    <Button
                        buttonStyle={{ backgroundColor: 'green' }}
                        title="Comprar"
                        onPress={() => {
                            comprar(compra),
                                navigation.goBack()
                        }}
                    />
                </View>

            </View>

        </View>
    )
}

export default Compra
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonStyle: {
        marginBottom: 15,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textos: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
    }
});


