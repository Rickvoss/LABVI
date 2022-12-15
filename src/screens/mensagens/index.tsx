import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Avatar, Button, Input} from "@rneui/themed";
import {useNavigation} from '@react-navigation/native';
import { Icon } from '@rneui/base';

export interface MensagensScreen {
}

export function MensagensScreen (props: MensagensScreen) {
  const nav = useNavigation();
  return(
  <View style={styles.background}>
    <View style={styles.container}>
        <Text style={{textDecorationStyle: 'solid', fontSize: 20, fontWeight: '500', color: 'white' }}>Sem Mensagens</Text>
    </View>
    <View style={{left: 15, right: 10, height: 60, justifyContent: 'center',marginVertical: 85, alignItems: 'center', position: 'absolute', bottom: 0, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'white', borderRadius: 55, width: 330, height: 50 }}>
        <Input underlineColorAndroid="transparent"  placeholder='Digite sua mensagem'/>
        </View>
        <Button buttonStyle={{marginHorizontal: 9, width: 50, height: 50, borderRadius: 25, backgroundColor: '#09d290'}}  
        icon={
            <Icon
                type='font-awesome-5'
                name="arrow-right"
                size={30}
                color="white"/>}/>
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
  height: '15%',
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
  }
);