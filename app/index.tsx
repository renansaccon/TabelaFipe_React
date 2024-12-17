import { StatusBar, Text, View } from "react-native";
import FipeScreen from "./components/FipeScreen";
import useSWR from 'swr' //faz requisições get e também utilizados dados cache
import fetcher from "@/api/fetcher";
import { FipeItem, Marca } from "@/models";
import { router } from "expo-router";

export default function Index() {

  const {data, error, isLoading } = useSWR<Marca[]> ('carros/marcas', fetcher)


  const handlePress = (item: FipeItem) => {
    const {codigo, nome} = item;
    router.push({pathname: '/modelos', params: { codigoMarca: codigo}})
  }
  
  return (
    <FipeScreen data={data} handlePress={handlePress}/>
  );
}
