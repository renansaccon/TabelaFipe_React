import { StatusBar, Text, View } from "react-native";
import FipeScreen from "./components/FipeScreen";
import useSWR from 'swr' //faz requisições get e também utilizados dados cache
import fetcher from "@/api/fetcher";
import { FipeItem, Marca } from "@/models";
import { router } from "expo-router";

export default function Index() {

  const {data, error, isLoading, mutate } = useSWR<Marca[]> ('carros/marcas', fetcher, {
    //o mutate é o parametro que ira chamar a solicitação novamente no update quando o usuário puxar para baixo
    dedupingInterval: 60_000 //com este tempo ele limpa o cache, ou seja, caso o usuario carregou a informação
    //ele utilizara a informação carregada da lista por 60 segundos. Após isso ele fará a requisição novamente
  })

  if (error) {
    return (<Text>{error.message}</Text>)
  }

  const handlePress = (item: FipeItem) => {
    const {codigo, nome} = item;
    router.push({pathname: '/modelos', params: { codigoMarca: codigo}})
  }
  
  return (
    <FipeScreen data={data} handlePress={handlePress} isLoading={isLoading} update={mutate}/>
  );
}
