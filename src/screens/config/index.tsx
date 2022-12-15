import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Avatar, Button} from "@rneui/themed";
import {useNavigation} from '@react-navigation/native';
import { Icon } from '@rneui/base';

export interface SettingsScreen {
}

export function SettingScreen (props: SettingsScreen) {
  const nav = useNavigation();
  return(
  <View style={styles.background}>
    <View style={styles.container}>
      
      <View style={{alignItems: 'center'}}>
      <Button buttonStyle={styles.grupos}  
        icon={ 
            <Icon
                type='font-awesome-5'
                name= 'users'
                size={25}
                color="white"/>}
                iconPosition='right'
                title="Seu Perfil e Família"
                titleStyle={{fontSize: 15, marginRight: 125}}
                />
        <Button buttonStyle={styles.grupos}  
        icon={ 
            <Icon
                type='font-awesome-5'
                name= 'user-cog'
                size={25}
                color="white"/>}
                iconPosition='right'
                title="Configurações da Conta"
                titleStyle={{fontSize: 15, marginRight: 105}}
                />
        <Button buttonStyle={styles.grupos}  
        icon={ 
            <Icon
                type='font-awesome'
                name= 'gear'
                size={25}
                color="white"/>}
                iconPosition='right'
                title="Configurações do dispositivo"
                titleStyle={{fontSize: 15, marginRight: 75}}
                />
        <Button buttonStyle={styles.grupos}  
        icon={ 
            <Icon
                type='font-awesome-5'
                name= 'street-view'
                size={25}
                color="white"/>}
                iconPosition='right'
                title="Localização"
                titleStyle={{fontSize: 25, marginRight: 120, paddingLeft: 15}}
                />
        <Button buttonStyle={styles.grupos}  
        icon={ 
            <Icon
                type='font-awesome-5'
                name= 'music'
                size={25}
                color="white"/>}
                iconPosition='right'
                title="Música"
                titleStyle={{fontSize: 25, marginRight: 185}}
                />
                
      </View>
    </View>
    </View>
);

}

const styles = StyleSheet.create({
  background: {
  flex:1,
  alignItems: 'center',
  backgroundColor:'#292E32'},

  container: {
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  paddingTop: 55,
  height: '75%',
  width:'100%',
  alignItems: 'center',
  backgroundColor:'#09d290'},

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

  grupos:{
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: '#1D2124',
    borderRadius: 20,
    width: 330,
    height: 70},

  }
);