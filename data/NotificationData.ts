export const baseNotificationData = [
  {
    title: "Erro no Sensor de Pressão",
    description: "Leitura anômala: 18bar (acima do limite seguro de 10bar)",
  },
  {
    title: "Alerta no Sensor de Posição",
    description: "Posição não detectada - possível falha mecânica",
  },
  {
    title: "Falha no Sensor de Proximidade",
    description: "Sensor não responde - verificar conexão elétrica",
  },
  {
    title: "Sobrecarga Detectada",
    description: "Sensor de carga registrando 50kg (limite: 30kg)",
  },
  {
    title: "Atuador Pneumático Bloqueado",
    description: "Atuador não completou ciclo no tempo esperado",
  },
  {
    title: "Válvula Solenoide com Vazamento",
    description: "Válvula não está selando completamente",
  },
  {
    title: "Regulador de Pressão Instável",
    description: "Flutuações entre 4-8bar (deveria ser constante em 6.5bar)",
  },
  {
    title: "CLP em Modo de Falha",
    description:
      "Controlador Lógico entrou em estado de erro - reinicialização necessária",
  },
  {
    title: "Perda de Comunicação",
    description: "Sensor de Pressão não respondendo por 2 minutos",
  },
  {
    title: "Temperatura Elevada",
    description: "Atuador Pneumático superaquecendo (45°C)",
  },
  {
    title: "Alimentação Elétrica Irregular",
    description: "Tensão variando entre 10-14V (esperado: 12V constante)",
  },
  {
    title: "Erro de Calibração",
    description: "Sensor de Carga requer recalibração urgente",
  },
];
