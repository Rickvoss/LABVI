import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from "@rneui/themed";
import { Icon } from '@rneui/base';
import {useNavigation} from '@react-navigation/native';

export interface TodosScreen {
}

export function TodosScreen (props: TodosScreen) {
  return(
  <View style={styles.background}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>  
        <Button buttonStyle={styles.dispositivos} 
        icon={
            <Icon
                name="apps"
                size={65}
                color="white"/>}
                iconPosition='top'
                title="Todos"
                titleStyle={{fontSize: 15}}/>
    </View>
</View>

      <View style={{alignItems: 'center', paddingTop: 55}}>
      <View  style={{flexDirection: 'row'}}>
      <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name="lightbulb"
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Luz Quarto 1"
                titleStyle={{fontSize: 25}}/>
      
      <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name="lightbulb"
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Luz Quarto 2"
                titleStyle={{fontSize: 25}}/>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name="lightbulb"
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Luz Sala"
                titleStyle={{fontSize: 25}}/>
      
      <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name= 'lightbulb'
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Luz Garagem"
                titleStyle={{fontSize: 25}}/>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Button buttonStyle={styles.grupos}  
        icon={
            <Icon
                type='font-awesome-5'
                name= 'tv'
                size={55}
                color="white"/>}
                iconPosition='top'
                title="Tv Sala"
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
  backgroundColor:'#FFF2D'},

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
  width: 110,
  height: 95},

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