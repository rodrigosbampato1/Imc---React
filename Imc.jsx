import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import {styles} from './styles/style';

export default function Imc() {

  const [valor, setValor] = useState({
      altura: 0,
      peso: 0,
  })

    const [calculo, setCalculo] = useState({
        resultado : '',
    });
    
    const handleInputChange = (parametro, value) => {
        setValor({
            ...valor, [parametro]: value
        })
    } 
    
        const sintomas = () => {
          
           let calimc= ( valor.peso / (valor.altura*valor.altura) ).toFixed(2)
        
            if  (calimc<=18.4){
                setCalculo({
                    ...calculo, resultado: `${calimc}   Você está abaixo do peso, possiveis sintomas de fadiga, stress, ansiedade.`
                })

            } else if (calimc >=18.5 && calimc <= 24.9 ){
                setCalculo({
                    ...calculo, resultado:`${calimc}   Você está no peso ideal, tem menores chances de ter problemas cardiacos e vasculares.`
                })
            }  else if (calimc >= 25 && calimc <= 29.9){
                setCalculo({
                    ...calculo, resultado:`${calimc}   Você está acima do peso, maior probalidade de fadiga, má circulação e varizes.`
                })
            }
        }


    return (


        <View style={styles.imc}>
                <Text style={styles.textimc}>Calcule seu IMC {'\n'}</Text>

                    <View style={styles.input}>
                        <TextInput style={styles.input1}
                            placeholder="Digite seu peso, ex: 74.5"
                            keyboardType='numeric'
                            onChangeText={(entrada) => handleInputChange("peso",entrada)
                                } />

                        <TextInput style={styles.input1}
                            placeholder="Digite sua altura, ex: 1.80"
                            keyboardType='numeric'
                            onChangeText={(entrada) => handleInputChange("altura",entrada)
                            } />
                    </View>
                   
                   <View>
                        <TouchableOpacity  style={styles.botao}
                        onPress={sintomas}>
                            <Text> Calcule</Text>
                        </TouchableOpacity>
                    </View>
                
                
                <Text style={styles.textimc1}> O resultado do IMC é: {calculo.resultado} </Text>
            

        </View>
    )
}