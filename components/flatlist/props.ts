export interface SensorData {
  nome: string;
  valor: string;
  ultimaAtualizacao: string;
  status: string;
}

export interface FlatListProps {
  data: SensorData[];
}
