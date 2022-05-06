import * as React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  EvilIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

export default function Viagens(props) {
  var iduser = "111111";

  return (
    <View
      style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}
    >
      <View
        style={{
          width: "95%",
          backgroundColor: "#ffff",
          padding: 5,
          borderRadius: 6,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 5,
          }}
        >
          <Text style={{ color: "#696969", fontWeight: "700", fontSize: 17 }}>
            <EvilIcons name="location" size={14} color="#696969" /> Natividade
          </Text>
          <Text style={{ color: "#dcdcdc" }}>
            <MaterialIcons name="arrow-forward" size={12} color="#dcdcdc" />{" "}
            -----
            <Text style={{ color: "#fb6d6c", fontWeight: "700" }}>
              {" "}
              3 vagas{" "}
            </Text>{" "}
            -----
            <MaterialIcons name="arrow-forward" size={12} color="#dcdcdc" />
          </Text>
          <Text style={{ color: "#696969", fontWeight: "700", fontSize: 17 }}>
            <EvilIcons name="location" size={14} color="#696969" /> Palmas
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
            padding: 5,
          }}
        >
          <Text style={{ color: "#c3c8d3", fontWeight: "700" }}>
            Saída 12:00
          </Text>
          <Text style={{ color: "#c3c8d3", fontWeight: "700" }}>
            Valor viagem R$ 50
          </Text>
        </View>
        {props.user == iduser ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fb6d6c",
                width: "30%",
                borderRadius: 6,
              }}
            >
              <Text
                style={{ fontSize: 20, color: "#ffff", fontWeight: "bold" }}
              >
                -
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#ffff",
                  fontSize: 14,
                  marginLeft: 5,
                }}
              >
                {" "}
                Diminuir
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fb6d6c",
                width: "30%",
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

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fb6d6c",
                width: "30%",
                padding: 10,
                borderRadius: 6,
              }}
            >
              <MaterialIcons name="add" size={15} color="#ffff" />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#ffff",
                  fontSize: 14,
                  marginLeft: 5,
                }}
              >
                {" "}
                Aumentar
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
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
                Pedir vaga para Italo
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
