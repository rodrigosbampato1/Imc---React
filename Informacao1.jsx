import { View , Text } from "react-native";
import React from "react";
import {styles} from './styles/style';


export default function Informacao1(props){
    return(
        <View style={styles.informacao1}>
            <Text style={styles.textinf1}> {props.titulo}</Text>
            
            <Text style={styles.textinfo1}> {props.conteudo}</Text>
            <Text style={styles.textinfo1}>Autor: {props.autor}</Text>

            
        </View>
        
    )
}