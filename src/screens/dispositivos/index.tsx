import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Avatar, Button} from "@rneui/themed";
import { Icon } from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons, EvilIcons, Ionicons, FontAwesome, Feather} from '@expo/vector-icons'

export interface DevicesScreen {
}

export function DevicesScreen (props: DevicesScreen) {
  const nav = useNavigation();
  return(
  <View style={styles.background}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>  
        <Button onPress={() => nav.navigate('lampadas')} buttonStyle={styles.dispositivos} 
        icon={
            <Icon
                type='font-awesome'
                name="lightbulb-o"
                size={45}
                color="white"/>}
                iconPosition='top'
                title="Lâmpadas"
                titleStyle={{fontSize: 12}}/>
        <Button onPress={() => nav.navigate('sons')} buttonStyle={styles.dispositivos} 
            icon={
            <Icon
                name="speaker"
                size={45}
                color="white"/>}
                iconPosition='top'
                title="Sons"
                titleStyle={{fontSize: 12}}/>
        <Button onPress={() => nav.navigate('tv')} buttonStyle={styles.dispositivos} 
            icon={
            <Icon
                name="tv"
                size={45}
                color="white"/>}
                iconPosition='top'
                title='Televisões'
                titleStyle={{fontSize: 12}}/>
        <Button onPress={() => nav.navigate('todos')} buttonStyle={styles.dispositivos} 
        icon={
            <Icon
                name="apps"
                size={45}
                color="white"/>}
                iconPosition='top'
                title="Todos"
                titleStyle={{fontSize: 12}}/>
    </View>
</View>
<View>
<Button buttonStyle={styles.grupo} 
        icon={
            <Icon
                type='font-awesome-5'
                name="layer-group"
                size={45}
                color="white"/>}
                iconPosition='top'
                title="Grupos"
                titleStyle={{fontSize: 12}}/>
</View>
      <View style={{alignItems: 'center', paddingTop: 55}}>
      <View  style={{flexDirection: 'row'}}>
      <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name="bed"
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Quarto 1"
                titleStyle={{fontSize: 25}}/>
      
      <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name="bed"
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Quarto 2"
                titleStyle={{fontSize: 25}}/>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name="couch"
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Sala"
                titleStyle={{fontSize: 25}}/>
      
      <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name= 'car'
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Garagem"
                titleStyle={{fontSize: 25}}/>
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
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  paddingTop: 55,
  height: '20.4%',
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

  dispositivos:{
  marginHorizontal: 5,
  backgroundColor: '#292E32',
  borderRadius: 20,
  width: 90,
  height: 85},

  grupos:{
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: '#1D2124',
    borderRadius: 20,
    width: 170,
    height: 140},

    grupo:{
        marginTop: 25,
        marginHorizontal: 5,
        backgroundColor: '#09d290',
        borderRadius: 20,
        width: 110,
        height: 85},

});