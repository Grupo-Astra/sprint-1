# ⭐ ASTRA ⭐

Integrantes:

- Guilherme Pagani, RM: 99445
- Júlia Santos, RM: 97897
- Kauê Miziara, RM: 550451
- Leonardo Garcia, RM: 99471
- Rodrigo Huaman Cabrera, RM: 550227

ASTRA é um aplicativo desenvolvido com o objetivo de criar um gêmeo digital
de um sistema pneumático de balancim, amplamente utilizado na indústria têxtil.

O principal propósito do projeto é:

- Simular digitalmente o funcionamento do equipamento físico;

- Monitorar em tempo real o status de todos os componentes;

- Prevenir falhas por meio de análises preditivas;

- Reduzir o tempo de inatividade com manutenções corretivas.

## 🚀 Como executar

Nesta segunda entrega, o aplicativo está separado em duas partes:

- Frontend, neste repositório;
- Backend, disponível no [seguinte repositório](https://github.com/Grupo-Astra/apmd-go-api).

Para funcionar corretamente, as duas partes devem ser executadas simultaneamente.

### Executando o Backend

Clone o [repositório do backend](https://github.com/Grupo-Astra/apmd-go-api) e siga
as instruções contidas em seu README para compilar a API ou executar via Docker.

Com o backend rodando em uma instância do terminal (ou como um
processo no plano de fundo do sistema), execute o Frontend em outra instância.

### Executando o Frontend

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

## 🖼 Protótipo no Figma

Acesse o layout completo do projeto no Figma:

### 🔗 [Figma - Protótipo ASTRA](https://www.figma.com/design/QCd382CXlcN2zXRg6NND32/Untitled?node-id=1-179&t=XpYw7EAwRIXr0YYA-1)

## 📱 Telas do aplicativo

O aplicativo ASTRA conta com as seguintes telas, divididas entre o fluxo
de autenticação e as telas principais da aplicação (acessíveis após o login):

- **Splash Screen**: Tela inicial de carregamento. Verifica se o usuário já possui
  um token de autenticação válido para direcioná-lo automaticamente para a Home.

### Fluxo de Autenticação (Telas Públicas)

- **Login**: Tela para entrada no sistema com usuário e senha. Oferece acesso ao
  cadastro e à redefinição de senha.
- **Cadastro**: Tela para registro de novos usuários no sistema.
- **Redefinir Senha**: Tela pública que permite ao usuário redefinir sua senha
  fornecendo o nome de usuário e uma nova senha.

### Fluxo Principal (Telas Privadas)

- **Apresentação (Home)**: Introdução ao projeto e visão geral do sistema pneumático.
- **Histórico**: Visualização dos registros de funcionamento do sistema.
- **Notificações**: Alertas e avisos importantes em tempo real (mock).
- **Componentes**: Monitoramento individual de cada componente do sistema pneumático.
- **Perfil**: Exibe os dados do usuário e botão de "Sair" (Logout) do aplicativo.
