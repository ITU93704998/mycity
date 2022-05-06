import * as React from 'react';
import {Text, View,Image,TouchableOpacity}from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Cupons(props) {

  return (
      <View style={{backgroundColor: '#ffff', marginRight: 10, width: 300, borderRadius: 6, padding: 10,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      
      elevation: 9,marginTop: 5, marginLeft: 10, marginBottom:15}}>
        <View style={{}}>
            <View style={{flexDirection: 'row', width: '100%', padding: 10,}}>
            <View style={{flexDirection: 'column', justifyContent: 'center', width: '50%', alignItems: 'center'}}>
                <Image style={{width: 80, height: 80}} source={require('../img/coupons.png')} />
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', width: '50%', alignItems: 'center', marginLeft: '-50%'}}>
                <Text style={{fontSize: 50, color: '#fb6d6c', fontWeight: 'bold'}}>{props.valor}%</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', width: '50%', padding: 5}}>
                <Text style={{color: '#696969', fontWeight: '700', fontSize: 16}}>{props.descricao}</Text>
                <Text style={{fontSize: 16, fontWeight: '500', color: '#696969'}}>{props.loja}</Text>
            </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#84d1ab', width: '100%', padding: 10, borderRadius: 6}}>
            <Text style={{fontWeight: 'bold', color: '#ffff', fontSize: 14, marginLeft: 5}}> Pegar cupom</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
  );
}