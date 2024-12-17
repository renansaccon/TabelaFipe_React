import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title: "Tabela Fipe"}}></Stack.Screen>
    <Stack.Screen name="modelos" options={{title: "Modelos"}}></Stack.Screen>
    <Stack.Screen name="anos" options={{title: "Anos"}}></Stack.Screen>
    <Stack.Screen name="veiculo" options={{title: "Veiculos"}}></Stack.Screen>
  </Stack>;
}
