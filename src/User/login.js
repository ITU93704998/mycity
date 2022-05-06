import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  const [user, setUser] = useState();
  const [senha, setSenha] = useState();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextInput
          style={{
            width: "90%",
            height: 60,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 6,
            borderColor: "#dcdcdc",
          }}
          onChangeText={setUser}
          value={user}
          placeholder="e-mail"
          keyboardType="default"
        />
        <TextInput
          style={{
            width: "90%",
            height: 60,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderColor: "#dcdcdc",
            borderRadius: 6,
          }}
          onChangeText={setSenha}
          value={senha}
          placeholder="senha"
          keyboardType="default"
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fb6d6c",
            width: "90%",
            height: 60,
            padding: 10,
            borderRadius: 6,
            marginTop: 20,
          }}
        >
          <MaterialIcons name="login" size={15} color="#ffff" />
          <Text
            style={{
              fontWeight: "bold",
              color: "#ffff",
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            {" "}
            Logar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            padding: 10,
            height: 60,
            borderRadius: 6,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#696969",
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            Cadastra-se
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
