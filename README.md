# API de Fatos Históricos




Esta é uma API simples que retorna um fato histórico com base no ano fornecido pelo usuário. Ela foi desenvolvida como parte do curso de Programador Fullstack da DevMedia. A aplicação utiliza as seguintes tecnologias:

- Node.js
- Express.js
- JavaScript

## Estrutura de Diretórios

A estrutura de diretórios da aplicação é a seguinte:

- **api**: Contém o arquivo principal da aplicação, responsável por configurar e iniciar o servidor Express.
- **data**: Armazena a base de dados dos fatos históricos.
- **service**: Contém a lógica da aplicação, incluindo as funções para buscar fatos históricos e validar o ano fornecido pelo usuário.

## Funcionamento

A API permite que os usuários obtenham um fato histórico fornecendo o ano desejado como parâmetro de consulta. Ela retorna um objeto JSON contendo o fato histórico correspondente ao ano especificado.

Para utilizar a API, basta enviar uma requisição GET para o endpoint principal ("/") com o ano desejado como parâmetro de consulta. Por exemplo:

GET /?ano=2000


Se o ano estiver dentro do intervalo permitido (1920-2020) e for um número válido, a API retornará o fato histórico correspondente ao ano especificado. Caso contrário, ela retornará uma mensagem de erro adequada.

## Resolução de Problemas

A principal funcionalidade da API está na resolução de problemas relacionados à busca de fatos históricos com base no ano fornecido pelo usuário. Isso é alcançado através da lógica implementada no serviço da aplicação, que valida o ano e busca o evento correspondente na base de dados.

Além disso, a aplicação trata erros e exceções de forma apropriada, garantindo uma experiência de usuário consistente e confiável.

Licença
Este projeto está licenciado sob a Licença MIT.


