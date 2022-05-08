import { React, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { ImageSlider } from "react-native-image-slider-banner";
import PromocaoDia from "../Components/promocao_dia";
import Cupons from "../Components/cupons";
import Viagens from "../Components/viagens";
import Servicos from "../Components/servicos";

export default function TimeLine() {
  const [data, setData] = useState([]);
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
  const DATAC = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      loja: "Eletronica Mais",
      ramo: "mercado",
      title: "First Item",
      valor: "5",
      descricao: "Em todaaa loja",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      loja: "Comercio",
      ramo: "farmacia",
      title: "First Item",
      valor: "10",
      descricao: "Produtos selecionados",
    },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: Platform.OS == "android" ? 30 : 0 }}
    >
      <ScrollView style={{}}>
        <ImageSlider
          style={{}}
          data={[
            {
              img: "https://images.vexels.com/media/users/3/197819/raw/1153f7e39c20c70b81c9618ebac96213-conjunto-de-banners-de-anuncios-de-venda-em-loja-online.jpg",
            },
            {
              img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
            },
            {
              img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
            },
          ]}
          autoPlay={false}
          timer
          closeIconColor="#fb6d6c"
        />

        <View style={{ padding: 10, marginTop: 10 }}>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View
              style={{
                width: "1%",
                backgroundColor: "#fb6d6c",
                borderRadius: 10,
              }}
            ></View>
            <View style={{ width: "94%", marginLeft: 5 }}>
              <Text style={{ color: "#c0c0c0", fontSize: 13 }}>
                <FontAwesome name="newspaper-o" size={12} color="#c0c0c0" /> Por
                Italo Dionisio - Natividade-TO - 17/02/1996{" "}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#696969",
                  fontSize: 16,
                  marginTop: 5,
                }}
              >
                Com mais de 120 milhões de usuários ativos mensalmente, o
                WhatsApp é fonte de informação para a maior parte dos
                brasileiros...
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#c3c8d3",
              marginTop: 10,
              fontSize: 17,
            }}
          >
            Cupons
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={{ width: "100%" }}>
            <FlatList
              style={{
                width: "100%",
              }}
              showsHorizontalScrollIndicator={false}
              data={DATAC}
              horizontal
              renderItem={({ item }) => (
                <Cupons
                  loja={item.loja}
                  valor={item.valor}
                  descricao={item.descricao}
                />
              )}
            />
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ color: "#c3c8d3", fontWeight: "bold", fontSize: 17 }}>
            {" "}
            Promoções do dia
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <FlatList
            style={{
              width: "100%",
            }}
            showsHorizontalScrollIndicator={false}
            data={data}
            horizontal
            renderItem={({ item }) => (
              <PromocaoDia
                loja={item.nome}
                valor={item.valor}
                descricao={item.descricao}
              />
            )}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold", color: "#c3c8d3", fontSize: 17 }}>
            Empregos - Serviços
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Servicos />
        </View>

        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#c3c8d3",
              marginTop: 10,
              fontSize: 17,
            }}
          >
            Viagens - Fretes
          </Text>
        </View>

        <Viagens />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "#c0c0c0" }}>TuGyn Tec - Italo Dionisio </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
