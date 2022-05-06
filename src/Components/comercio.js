import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ComercioComponents(props) {
  return (
    <View
      style={{
        backgroundColor: "#ffff",
        width: "90%",
        borderRadius: 6,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        marginTop: 5,
        marginBottom: 15,
      }}
    >
      <View style={{}}>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              width: "20%",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={
                props.valorMenur == 1
                  ? require(`../img/1.png`)
                  : props.valorMenur == 2
                  ? require(`../img/2.png`)
                  : props.valorMenur == 3
                  ? require(`../img/3.png`)
                  : require(`../img/4.png`)
              }
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              width: "80%",
              padding: 5,
            }}
          >
            <Text style={{ color: "#696969", fontWeight: "700", fontSize: 16 }}>
              {props.nome}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#696969" }}>
              {props.descricao}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#696969" }}>
              seg-sex 08:00 18:00 sab 08:12
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#84d1ab",
              width: "100%",
              padding: 10,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#ffff",
                fontSize: 14,
                marginLeft: 5,
              }}
            >
              <FontAwesome name="whatsapp" size={15} color="#ffff" /> Mandar
              menssagem
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
