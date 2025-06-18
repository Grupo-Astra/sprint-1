# ⭐ ASTRA ⭐

Integrantes:

- Guilherme Pagani, RM: 99445
- Júlia Santos, RM: 97897
- Kauê Miziara, RM: 550451
- Leonardo Garcia, RM: 99471
- Rodrigo Huaman Cabrera, RM: 550227

ASTRA é um aplicativo desenvolvido com o objetivo de criar um gêmeo digital de um sistema pneumático de balancim, amplamente utilizado na indústria têxtil.

O principal propósito do projeto é:

- Simular digitalmente o funcionamento do equipamento físico;

- Monitorar em tempo real o status de todos os componentes;

- Prevenir falhas por meio de análises preditivas;

- Reduzir o tempo de inatividade com manutenções corretivas.

# 🚀 Como executar

Nesta segunda entrega, o aplicativo está separado em duas partes:

- Frontend, neste repositório;
- Backend, disponível no [seguinte repositório](https://github.com/Grupo-Astra/apmd-go-api).

Para funcionar corretamente, as duas partes devem ser executadas simultaneamente.

## Executando o Backend

Clone o [repositório do backend](https://github.com/Grupo-Astra/apmd-go-api) e siga
as instruções contidas em seu README para compilar a API ou executar via Docker.

Com o backend rodando em uma instância do terminal (ou como um
processo no plano de fundo do sistema), execute o Frontend em outra instância.

## Executando o Frontend

Clone o repositório e, dentro da pasta do projeto, baixe as dependências com:

```sh
npm install
```

Então, para iniciar o aplicativo, execute:

```sh
npm start
```

Em seguida:

Pressione `w` para abrir no navegador (web);

Ou escaneie o QR Code com o seu celular para rodar em um dispositivo móvel.

# 🖼 Protótipo no Figma

Acesse o layout completo do projeto no Figma:

### 🔗 [Figma - Protótipo ASTRA](https://www.figma.com/design/QCd382CXlcN2zXRg6NND32/Untitled?node-id=1-179&t=XpYw7EAwRIXr0YYA-1)

# 📱 Telas do aplicativo

O aplicativo ASTRA conta com as seguintes telas principais:

- Splash Screen: tela inicial de carregamento;

- Apresentação (Home): introdução ao projeto;

- Histórico: visualização dos registros de funcionamento;

- Notificações: alertas e avisos importantes em tempo real (mock);

- Componentes: monitoramento individual de cada componente do sistema pneumático.
