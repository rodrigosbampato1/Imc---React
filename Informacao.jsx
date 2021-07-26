import { View , Text } from "react-native";
import React from "react";
import {styles} from './styles/style';


export default function Informacao(props){
    return(
        <View style={styles.informacao}>
            
            <Text style={styles.textinf2}> {props.boasVindas}</Text>
            <Text >{props.curiosidades}</Text>
            
           
            <Text>------------------------------</Text>
            
        </View>
    )
}