import React from 'react';
import { Homescreen } from '../screens/home/index';
import { Contascreen } from '../screens/conta/index';
import { Loginscreen } from '../screens/login';
import { LampadasScreen } from '../screens/dispositivos/lampadas';
import { SonsScreen } from '../screens/dispositivos/sons';
import { TvScreen } from '../screens/dispositivos/televisoes';
import { TodosScreen } from '../screens/dispositivos/todos';
import { InformacoesScreen } from '../screens/conta/informacoes';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';






const Stack = createStackNavigator();


export const NavegacaoPrincipal = () => (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={Loginscreen} />
        <Stack.Screen name="home" component={Homescreen} />
        <Stack.Screen name="perfil" component={Contascreen} />
        <Stack.Screen name="lampadas" component={LampadasScreen} />
        <Stack.Screen name="sons" component={SonsScreen} />
        <Stack.Screen name="tv" component={TvScreen} />
        <Stack.Screen name="todos" component={TodosScreen} />
        <Stack.Screen name="informacoes" component={InformacoesScreen} />
    </Stack.Navigator>
    </NavigationContainer>     
)