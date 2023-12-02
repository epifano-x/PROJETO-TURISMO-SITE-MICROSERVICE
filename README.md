# Projeto de Turismo - Desenvolvimento Avançado

Este projeto consiste em uma aplicação de turismo desenvolvida para fins de estudo em tópicos avançados. A arquitetura da aplicação é dividida em duas partes principais: uma API REST em Java, outra API REST em Node.js e o frontend em React.

## Estrutura do Projeto

O projeto é dividido em três partes principais:

1. **API Java (turismo-api-java):**
   - Desenvolvida em Java utilizando tecnologias avançadas.
   - Fornece endpoints REST para interação com dados relacionados ao turismo.

2. **API Node.js (turismo-api-node):**
   - Desenvolvida em Node.js, proporcionando uma abordagem moderna para a criação de APIs.
   - Oferece endpoints REST complementares para operações específicas.

3. **Frontend em React (turismo-react):**
   - Interface de usuário desenvolvida em React para interagir com as APIs.
   - Permite aos usuários visualizar informações turísticas, fazer reservas e interagir com o sistema.

## Configuração do Ambiente de Desenvolvimento

Certifique-se de seguir os passos abaixo para configurar o ambiente de desenvolvimento:

### API Java (turismo-api-java)

1. Configure um banco de dados MySQL e atualize as configurações no arquivo `application.properties`.
2. Execute a aplicação Java.

```bash
cd turismo-api-java
./mvnw spring-boot:run
```

### API Node.js (turismo-api-node)

1. Configure um banco de dados MongoDB e atualize as configurações no arquivo config.js.
2.Execute a aplicação Node.js.

```bash
cd turismo-api-node
npm install
npm start
```

### Frontend React (turismo-react)

1. Atualize as configurações de API no arquivo src/config.js.
2. Execute o aplicativo React.

```bash
cd turismo-react
npm install
npm start
```

Agora, o ambiente de desenvolvimento está configurado com as APIs Java e Node.js em execução, além do frontend React. Abra os navegadores e acesse http://localhost:8081 mas pode definir a porta que desejar para interagir com a aplicação.




