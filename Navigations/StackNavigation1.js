import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Principal from '../Screens/Principal';
import Compra from '../Screens/Compra';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Principal" component={Principal}
                options={{headerShown:false, headerTitle:'Inicio'}}
            />

            <Stack.Screen name="Compra" component={Compra}
                options={{headerShow:false, headerTitle:"Carrito"}}
            />

        </Stack.Navigator>

    )
}