import { View , Text } from "react-native";
import React from "react";
import {styles} from './styles/style';


export default function Informacao2(props){
    return(
        <View style={styles.informacao2}>
            <Text style={styles.textinf3}> Exercicios</Text>
            
            <View>
                <Text style={styles.textinfo1}> {props.exercicios1}</Text>
                <Text style={styles.textinfo1}> {props.exercicios2}</Text>
            </View>
            
        </View>
    )
}