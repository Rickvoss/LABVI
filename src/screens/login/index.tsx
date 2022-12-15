import * as React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View,} from 'react-native';
import { Button, patchWebProps } from '@rneui/base';
import { Input, Icon} from "@rneui/themed";
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';



export interface LoginscreenProps {
}



export function Loginscreen (props: LoginscreenProps) {
    const [ email, setEmail] = useState('')
    const [ senha, setSenha] = useState('')
    const nav = useNavigation();

    const logar = () => {
        if (email == 'email' && senha == '123456')
          nav.navigate('home')
        else 
        alert('Login e/ou senha Incorreta')
            console.log('Email ou senha incorreta')

    }
    return (
        <View style={styles.background}>
            <Icon  size={100} name='login' type='Ionicons' color='#75838F'></Icon>
            <Input placeholder='Digite seu e-mail' value={email} onChangeText={setEmail} leftIcon={{name:'person', color:'#75838F'}} inputStyle={{color:'#75838F'}}/>
            <Input placeholder='Digite sua senha' value={senha} onChangeText={setSenha} leftIcon={{name:'lock', color:'#75838F'}} inputStyle={{color:'#75838F'}} secureTextEntry={true}/>
            <Button title='Logar' onPress={logar} containerStyle={{borderRadius:9}} buttonStyle={{backgroundColor:'#75838F'}}  type='solid'/>
        </View>
    )    
}


const styles = StyleSheet.create({
    background: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      backgroundColor:'#292E32'},}
)