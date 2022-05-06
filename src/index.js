import React, { useState, useEffect, useCallback } from "react";
import { Text, View, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import User from "./User";
import Comercio from "./Comercio";
import TimeLine from "./TimeLine";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar
          style={Platform.OS == "android" ? "light" : "auto"}
          backgroundColor={Platform.OS == "android" ? "#fb6d6c" : "#fb6d6c"}
        />
      </SafeAreaView>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "TimeLine") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Comercio") {
              iconName = focused ? "shopping-basket" : "shopping-basket";
            } else {
              iconName = focused ? "user" : "user-o";
            }
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={24} color={color} />;
          },

          tabBarActiveTintColor: "#fb6d6c",
          tabBarInactiveTintColor: "#c3c8d3",
        })}
      >
        <Tab.Screen
          name="TimeLine"
          component={TimeLine}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Comercio"
          component={Comercio}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Usuário"
          component={User}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
