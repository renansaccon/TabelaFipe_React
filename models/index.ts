export interface FipeItem {
    codigo: string,
    nome: string,
}

export interface ListaModelos {
    modelos: Modelo[],
    anos: Ano[]
}


export interface Marca extends FipeItem{};
export interface Modelo extends FipeItem{};
export interface Ano extends FipeItem{};

export interface DetalhesVeiculo {
    TipoVeiculo: number,
    Valor: string,
    Marca: string,
    Modelo: string,
    AnoModelo: string,
    Combustivel: string,
    CodigoFipe: string,
    MesReferencia: string,
    SiglaCombustivel:string,
}