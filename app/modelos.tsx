import { Text, View } from "react-native";
import FipeScreen from "./components/FipeScreen";
import useSWR from 'swr' //faz requisições get e também utilizados dados cache
import fetcher from "@/api/fetcher";
import { FipeItem, ListaModelos } from "@/models";
import { router, useLocalSearchParams } from "expo-router";

export default function Modelos() {

  const {codigoMarca} = useLocalSearchParams();

  const {data, error, isLoading } = useSWR<ListaModelos> (`carros/marcas/${codigoMarca}/modelos`, fetcher)

  const handlePress = (item: FipeItem) => {
    const {codigo} = item
    router.push({pathname: '/anos', params: {codigoMarca: codigoMarca, codigoModelo: codigo}})
  }
  
  return (
    <FipeScreen data={data?.modelos} handlePress={handlePress} />
  );
}
