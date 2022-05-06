import * as React from "react";
import {
  Platform,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ComercioComponents from "../Components/comercio";

export default function Comercio() {
  const [valorMeno, setValorMenu] = React.useState(1);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      loja: "Comercio Mais",
      ramo: "mercado",
      title: "First Item",
      valor: "57,89",
      descricao: "Produto em promoção em nossa loja",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      loja: "Comercio Mais",
      ramo: "farmacia",
      title: "First Item",
      valor: "59,99",
      descricao: "Produto em promoção em nossa loja",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      loja: "Comercio Mais",
      ramo: "roupas",
      title: "First Item",
      valor: "59,99",
      descricao: "Produto em promoção em nossa loja",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: Platform.OS == "android" ? 50 : 10,
        }}
      >
        <TouchableOpacity onPress={() => setValorMenu(1)}>
          <Text
            style={{
              color: valorMeno == 1 ? "#fb6d6c" : "#c3c8d3",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Mercado
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValorMenu(2)}>
          <Text
            style={{
              color: valorMeno == 2 ? "#fb6d6c" : "#c3c8d3",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Bebidas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValorMenu(3)}>
          <Text
            style={{
              color: valorMeno == 3 ? "#fb6d6c" : "#c3c8d3",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Farmacia
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValorMenu(4)}>
          <Text
            style={{
              color: valorMeno == 4 ? "#fb6d6c" : "#c3c8d3",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Outros
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ marginTop: 20 }}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <ComercioComponents
              valorMenur={valorMeno}
              nome="Italo"
              descricao="Loja de artigo festa crianças e muito mais "
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
