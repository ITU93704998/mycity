import * as React from 'react';
import { StyleSheet, Text, View , SafeAreaView, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TimeLine() {
  return (
    <SafeAreaView style={{flex: 1}}>
     <Text>TimeLine</Text>
     <View style={{}}>
        <Text style={{fontSize: 40}}>
          {"SO: " + Platform.OS}
        </Text>
        <Text style={{fontSize: 40}}>
          {"Versão: " + Platform.Version}
        </Text>
    </View>
    </SafeAreaView>
  );
}