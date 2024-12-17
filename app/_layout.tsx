import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title: "Tabela Fipe"}}></Stack.Screen>
    <Stack.Screen name="modelos" options={{title: "Modelos"}}></Stack.Screen>
  </Stack>;
}
