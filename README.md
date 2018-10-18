# TODO List

Criação de uma TODO List com React e Spring Boot.

# Links | Referencial

[reacjs](https://reactjs.org/).
[Criando um projeto | reactjs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
[Criando um projeto | spring](https://start.spring.io/)
[Preparando processo de build | integração com Spring](https://medium.com/@pietroghezzi/spring-and-react-js-the-easy-way-5abe8a529058)
[Dploy da aplicação em nuvem | Heroku](https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku)

# Requisitos

- Intalar Nodejs

# Execução
- Entrar na pasta:
```shell
cd plataforma/apps/sistema
```
- Instalar bibliotecas e executar sistema:
```shell
npm install
npm start
```
visitar localhost:3000

- Gerando ambiente de produção para integração com o Spring Framework:
```shell
npm run build
cd ../../
mvn spring-boot:run
```
visitar localhost:8080

