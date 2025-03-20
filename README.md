# Trainee da iJunior

A *iJunior* é a empresa júnior do Departamento de Ciência da Computação da Universidade Federal de Minas Gerais e comercializa websites, e-commerces, aplicativos e sistemas web há mais de 20 anos, proporcionando experiência prática com projetos reais e clientes reais para os seus efetivados.

O programa trainee da iJunior contempla quatro "trilhas" de conhecimentos, sendo o desenvolvimento back-end uma delas. O conteúdo teórico é dividido em semanas; as primeiras três contemplam: a familiarização com o ambiente de runtime Javascript, com a essa linguagem e sua extensão tipada, o Typescript, e com a arquitetura Model-View-Controller.

Em particular, chamo atenção para a utilização de *programação assíncrona* no código referente à Semana 3, que permite que outras tarefas sejam realizadas pelo programa enquanto outra, mais demorada, acontece no plano de fundo. Isso possibilita a implementação de APIs, que promovem o diálogo entre a aplicação e o banco de dados de um sistema web, através de requisições – que são chamadas inerentemente assíncronas.

## Modo de uso

### Para as Semanas 1 e 2, 
digite, no terminal, os comandos:

```bash
npm i

node semana_.js
# "_" (underline) deve ser substituído pelo número da semana
```

```bash
npx jest
# Para testar o código
```

### Para a Semana 3, 
digite, no terminal, os comandos:

```bash
npm i

npm run start
# Executa o script "start" em package.json
```
