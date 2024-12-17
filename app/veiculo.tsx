import { Text, View } from "react-native";
import FipeScreen from "./components/FipeScreen";
import useSWR from 'swr' //faz requisições get e também utilizados dados cache
import fetcher from "@/api/fetcher";
import { Ano, DetalhesVeiculo, FipeItem, ListaModelos } from "@/models";
import { router, useLocalSearchParams } from "expo-router";
import styles from "@/styles";
import SuperButton from "./components/SuperButton";

export default function Veiculo() {

  const {codigoMarca, codigoModelo, codigoAno} = useLocalSearchParams();


  const {data: veiculo, error, isLoading } = useSWR<DetalhesVeiculo> (`carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${codigoAno}`, fetcher, {
    dedupingInterval: 60_000
  })

  if (error){
    return (<Text>{error.message}</Text>)
  } 

  const detailItem = (item:string) => {
    return (
      <View style={styles.item}>
        <Text style={styles.item}>{item}</Text>
      </View>
    )
  }

  const goBack =() => {
    router.dismissAll()
  }
  
  return (
    <View style={styles.container}>
      {detailItem(`Veiculo: ${veiculo?.Modelo}`)}
      {detailItem(`Marca: ${veiculo?.Marca}`)}
      {detailItem(`Valor: ${veiculo?.Valor}`)}
      {detailItem(`Ano do Modelo: ${veiculo?.AnoModelo}`)}
      {detailItem(`Combustível: ${veiculo?.Combustivel}`)}

      <SuperButton title="Voltar para Tela Inicial" onPress={goBack} />
    </View>
  );
}
