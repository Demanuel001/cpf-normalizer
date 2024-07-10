# CPF Normalizer

## Descrição

O CPF Normalizer é uma aplicação que recebe um CPF em qualquer formato via prompt, conecta-se com a OpenAI para formatar o CPF para o formato padrão `XXX.XXX.XXX-XX` e também identifica se o CPF é válido. É uma ferramenta útil para garantir que os dados de CPF estejam em um formato consistente e validado.

## Funcionalidades

- **Recepção de CPF:** Recebe o CPF do usuário através de um prompt.
- **Formatação de CPF:** Utiliza a OpenAI para formatar o CPF para o formato `XXX.XXX.XXX-XX`.
- **Validação de CPF:** Verifica se o CPF é válido e retorna uma mensagem apropriada.

## Pré-requisitos

Antes de executar a aplicação, você precisará das seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (>= 18.x)
- [npm](https://www.npmjs.com/)

Além disso, você precisará de uma chave de API da OpenAI. Crie uma conta no [site da OpenAI](https://beta.openai.com/signup) e obtenha sua chave de API.

## Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Demanuel001/cpf-normalizer.git
2. Instale as dependências
   ```bash
   npm install
3. Configure suas variáveis de ambiente

   Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da OpenAI:

   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```
   Nota: Certifique-se de que o arquivo `.env` esteja incluído no seu `.gitignore` para evitar que informações sensíveis sejam incluídas no controle de versão.

4. Execute a aplicação
   ```bash
   npm start
   ```
   O prompt solicitará que você insira um CPF. O CPF será formatado e validado usando a OpenAI, e o resultado será exibido no console.

## Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

Certifique-se de que todos os testes estejam passando antes de realizar qualquer alteração no código.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.

---

Para mais informações, consulte a documentação da OpenAI para entender como integrar com a API da OpenAI.
