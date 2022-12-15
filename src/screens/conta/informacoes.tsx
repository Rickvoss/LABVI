import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Avatar, Button, Input} from "@rneui/themed";
import {useNavigation} from '@react-navigation/native';
import { Icon } from '@rneui/base';

export interface InformacoesScreen {
}

export function InformacoesScreen (props: InformacoesScreen) {
  const nav = useNavigation();
  return(
  <View style={styles.background}>
    <View style={styles.container}>
        <Text style={styles.texto} >Informações Pessoais</Text>
    </View>
    <View style={{marginTop: 50}}>
      <Text style={styles.texto} >Nome: Douglas Henrique Voss</Text>
      <Text style={styles.texto} >Nascimento: 27/07/2001</Text>
      <Text style={styles.texto} >Endereço: Rua Dr. Hans Chucrute</Text>
      <Text style={styles.texto} >Nacionalidade: Brasileiro</Text>
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
  
  texto:{
    textDecorationStyle: 'solid',
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  }
}
);