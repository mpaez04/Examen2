import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import {PeliculasContext} from '../Navigations/PeliculasContext';

const Principal = ({navigation}) => {
    const {cartelera,agregar} = useContext(PeliculasContext);
    return (
        <View>
            <Header
                centerComponent={{ text: 'Cinepolis', style: { color: 'white', fontSize:20}}}
                containerStyle={{borderBottomColor:'black',borderBottomWidth: 3 }}
            />
            <ScrollView>
            <View style={styles.container2}>
            {cartelera.map((e,i)=>{
                return(
                    <Card  
                    containerStyle={{
                        width: '90%',
                        marginBottom: 2
                    }} 
                    key={i}>
                        <Card.Title style={styles.titulos}>{e.nombre}</Card.Title> 
                        <Card.Divider/>
                       
                        <View style={styles.container}>
                            <View style={styles.container50}>
                                <Image
                                style={styles.imagen}
                                source={{
                                   uri: `${e.url}`, 
                                }}
                                
                                />
                            </View>
                            <View style={styles.container50}>
                                <Text style={styles.paragraph}>{e.clasificacion}</Text>
                                <Text style={styles.paragraph}>{e.idioma}</Text>
                                {e.horarios.map((horario,index)=>{
                                    return( 
                                        <View style={styles.container2}>
                                            <Button
                                            buttonStyle={{ backgroundColor: '#929292' }}
                                                onPress={()=>(
                                                    agregar(e,horario),
                                                    navigation.navigate('Compra')
                                                    )}
                                                key={index}
                                                title={horario}
                                            />
                                        </View>
                                        
                                    )
                                })} 

                            </View>
                        </View>
                    </Card>
                );
            })
            }
            </View>
        </ScrollView>
        </View>
        
        
    )
}

export default Principal

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection:'row',    
    },
    container50:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    imagen: {
        minHeight:230,
        minWidth: 150,
    },
    paragraph: {
        margin: 2,
        marginTop: 2,
        fontSize: 19,
        fontWeight: 'normal',
        textAlign: 'center',
      },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom:10,
    },
      buttonStyle: {
        color: 'red',
        marginBottom: 15,
    },
    titulos: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    TitHeader:{
        fontSize:20,
        color: 'white',
    }
});
  