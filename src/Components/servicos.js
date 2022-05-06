import * as React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function Servicos(props) {
  var iduser = "111111";
  return (
    <View
      style={{
        backgroundColor: "#ffff",
        width: "100%",
        borderRadius: 6,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View style={{}}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "700", color: "#696969" }}>
            1 Vaga de emprego para trabalhar como ajudante
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {props.user != iduser ? (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fb6d6c",
                width: "100%",
                padding: 10,
                borderRadius: 6,
              }}
            >
              <FontAwesome name="whatsapp" size={15} color="#ffff" />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#ffff",
                  fontSize: 14,
                  marginLeft: 5,
                }}
              >
                {" "}
                Contato
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fb6d6c",
                width: "100%",
                padding: 10,
                borderRadius: 6,
              }}
            >
              <AntDesign name="delete" size={15} color="#ffff" />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#ffff",
                  fontSize: 14,
                  marginLeft: 5,
                }}
              >
                {" "}
                Excluir
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
