# code-assignment

## Visão Geral

API Node.js capaz de receber requisições com comandos em JSON a serem executados em páginas da web.

## Instalação

Execute os comandos abaixo a partir do terminal:

```
> git clone https://github.com/bruncs/code-assignment.git
> npm install
```

## Execução

Para inicializar a execução da API, execute o comando abaixo a partir do diretório clonado:

```
> npm run start
```

O endpoint estará disponível por padrão em http://localhost:5000

## Instruções

Para executar um comando, envie uma requisição do tipo POST para o endpoint com um objeto JSON no seguinte formato:

```js
{
	"url": "https://www.itau.com.br",
	"commands": [
		{
			"elementTag": "input",
			"elementId": "agencia",
			"value": "6831"
		},
		{
			"elementTag": "input",
			"elementId": "conta",
			"value": "006967"
		},
		{
			"elementTag": "button",
			"elementId": "btnLoginSubmit"
		}
	]
}
```

Onde:
- **url:** URL da página onde deseja executar os comandos
- **commands:** Array de objetos com comandos que serão executados em forma sequencial
  - **elementTag:** Tipo da tag HTML
  - **elementId:** Id do elemento do DOM
  - **value:** Valor a ser preenchido (somente para inputs)

## Testes

Para inicializar a execução dos testes, execute o comando abaixo a partir do diretório da aplicação:

```
> npm run test
```

## Observações

- Não há tratamento para todos os erros;
- A premissa foi de utilizar o mínimo de bibliotecas/frameworks possível;
- É necessário ter o Google Chrome instalado.
