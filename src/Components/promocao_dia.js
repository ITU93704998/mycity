import * as React from 'react';
import {Text, View,FlatList,}from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function PromocaoDia(props) {

  

  return (
      <View style={{backgroundColor: '#fb6d6c', width: 300, borderRadius: 6, padding: 5,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      
      elevation: 9,marginTop: 5, marginLeft: 10, marginBottom:15}}>
        <View style={{}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffff'}}>{props.loja}  <FontAwesome name="star" size={15} color="gold" />2</Text>
            <View style={{flexDirection: 'row', width: '100%', padding: 10,}}>
            <View style={{flexDirection: 'column', justifyContent: 'center', width: '30%', alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: '#ffff', fontWeight: 'bold'}}>{props.valor}</Text>
                <Text style={{color: '#fff'}}>R$</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', width: '70%', padding: 5}}>
                <Text style={{color: '#ffff', fontWeight: '700'}}>{props.descricao}</Text>
            </View>
            </View>
            
        </View>
      </View>
  );
}