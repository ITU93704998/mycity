import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Login from "./login";
import Cadastra from "./cadastro";
import Servicos from "../Components/servicos";
import Viagens from "../Components/viagens";
import ComercioComponents from "../Components/comercio";

export default function User() {
  const [user, setUser] = React.useState(true);
  var iduser = "111111";

  if (!user) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Login />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView
        style={{ flex: 1, marginTop: Platform.OS == "android" ? 30 : 0 }}
      >
        <View
          style={{
            backgroundColor: "#fb6d6c",
            width: "100%",
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>
              Olá, Italo
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <MaterialIcons name="logout" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#c3c8d3",
              width: "30%",
              height: 40,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#696969", fontWeight: "bold" }}>
              Criar Serviço
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#c3c8d3",
              width: "30%",
              height: 40,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#696969", fontWeight: "bold" }}>
              Criar Emprego
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#c3c8d3",
              width: "30%",
              height: 40,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#696969", fontWeight: "bold" }}>
              Criar Viagem
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <ComercioComponents
            valorMenur={1}
            nome="Italo"
            descricao="Loja de artigo festa crianças e muito maiiiiis "
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
            marginTop: 10,
          }}
        >
          <Servicos />
        </View>

        <View>
          <Viagens user={iduser} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Servicos user={iduser} />
        </View>
      </SafeAreaView>
    );
  }
}
