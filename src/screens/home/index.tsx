import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Contascreen } from '../conta';
import { SettingScreen } from '../config';
import { DevicesScreen } from '../dispositivos'
import { MensagensScreen } from '../mensagens'
import { color } from '@rneui/base';


export interface HomescreenProps {
}

export function Homescreen (props: HomescreenProps) {
  const nav = useNavigation();
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator screenOptions={{tabBarStyle: styles.estilobarra, headerShown: false, tabBarActiveTintColor: 'white', tabBarInactiveTintColor: '#292E32',}}>
        
      <Tab.Screen name="Configuração" component={SettingScreen} options={{
        tabBarLabel:"Configuração",
        tabBarIcon: () => <MaterialIcons name="settings" size={20} color='white' />
      }}/>
      <Tab.Screen name="Mensagens" component={MensagensScreen} options={{
        tabBarLabel:"Mensagens",
        tabBarIcon: () => <MaterialIcons name="message" size={20} color='white' />
      }}/>
      <Tab.Screen name="Dispositivos" component={DevicesScreen} options={{
        tabBarLabel:"Dispositivos",
        tabBarIcon: () => <MaterialIcons name="devices" size={20} color='white'/>
      }}/>
      <Tab.Screen name="Perfil" component={Contascreen} options={{
        tabBarLabel:"Perfil",
        tabBarIcon: () => <MaterialIcons name="face" size={20} color='white' />
      }}/>
      </Tab.Navigator>
  )
  
  }
  
  const styles = StyleSheet.create({
    background: {
      flex:1,
      alignItems: 'center',
      backgroundColor:'#292E32'},

      estilobarra: {
        position: 'absolute',
        right: 10,
        left: 10,
        bottom: 15,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#09d290',
        padding: 5,
        alignItems: 'center',
        paddingBottom: 10,
        borderTopColor: 'transparent',
        fontWeight: "bold",
        
      },
  
    container: {
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      paddingTop: 55,
      height: '50%',
      width:'100%',
      alignItems: 'center',
      backgroundColor:'#09d290'},
    botoes:{
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
      flexDirection: 'row',
    },
    bagui:{
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 15,
      marginVertical: 10,
      marginHorizontal: 10,
      alignItems: 'center',
      height: 60,
      width: '95%',
      backgroundColor:'#FFF'},
    }
  );
  