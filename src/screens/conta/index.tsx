import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Avatar, Button} from "@rneui/themed";
import {useNavigation} from '@react-navigation/native';
import { Icon } from '@rneui/base';

export interface contascreenProps {
}

export function Contascreen (props: contascreenProps) {
  const nav = useNavigation();
  return(
  <View style={styles.background}>
    <View style={styles.container}>
      <View>  
        <Avatar icon={{ name: 'person', type: 'octions', size: 80}} containerStyle={{backgroundColor: '#1C5240', borderRadius: 80, width: 120, height: 120 }}/>
      </View>
      <Text style={{color: 'white', fontSize: 50,}}>{'\n'}Henrique Voss</Text>
      <Text style={{color: 'white', fontSize: 25,}}>{'\n'}Maceió-AL</Text>
      </View>
      <View  style={{alignItems: 'center'}}>
      
      <Button onPress={() => nav.navigate('informacoes')} buttonStyle={styles.grupos}  
        icon={ 
            <Icon
                type='font-awesome'
                name= 'file-text'
                size={25}
                color="white"/>}
                iconPosition='right'
                title="Informações Pessoais"
                titleStyle={{fontSize: 15, marginRight: 105}}
                />

      </View>
      <View style={{alignSelf: 'flex-end',  justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0,}}>
      <Button onPress={() => nav.navigate('login')} buttonStyle={styles.btnsair}  
        icon={ 
            <Icon
                type='font-awesome'
                name= 'arrow-left'
                size={25}
                color="white"/>}
                iconPosition='left'
                title="Sair"
                titleStyle={{fontSize: 15, marginLeft: 10}}
                />
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
  height: '50%',
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

  btnsair:{
      
      marginVertical: 85,
      marginHorizontal: 20,
      backgroundColor: '#1D2124',
      borderRadius: 20,
      width: 120,
      height: 70},
  }
);