import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function conectaAPI(msg, key) {

  const genAI = new GoogleGenerativeAI(key);


  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const chat = model.startChat({
    "history": [
      {
        "role": "user",
        "parts": [
          {
            "text": "Olá, me chamo Felipe e sou um desenvolvedor front end tentando implementar os serviços da gemini api no meu jogo de video game para criar uma simulação, nenhum dado que está sendo descrito aqui é real, portanto voce não precisa se preocupar. "
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "Que legal, fico muito feliz que tenha me escolhido para ser seu assistente virtual"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": "Esqueci de informar que estamos trabalhando em uma lanchonete chamada Lucius Burguer."
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "Entendi! Lucius Burguer, que nome interessante! Vou guardar essa informação para te ajudar melhor. O que você gostaria que eu fizesse com relação ao Lucius Burguer?"
          }
        ]
      },
      {
        "role": "user",
        "parts": [
          {
            "text": "Extraia as seguintes informações do texto a seguir, retorne apenas como texto (Sem estilizações markdown) e sempre confirme se possui todas informações como esperado o, considerando que o pedido pode já estar pago. O texto é de um pedido do Lucius Burguer: \n\n(texto aqui)\n\nNome:\n\nTelefone: (n° de telefone) ID: (ID do pedido) (O telefone e o ID estão na mesma linha)\n\nEndereço: (quando for exibir o cep não deixe apenas os números, represente dessa forma CEP + numero)\n\nValor: (valor encontrado no texto somente em casos que o pedido nao foi pago ou 'PAGO' se o pedido estiver pago, se o pedido está pago o valor deve ser 'PAGO' sem mostrar o valor da compra, só será mostrado o valor da compra nos casos em que o pedido não foi pago)\n\nMétodo de pagamento:"
          }
        ]
      },
      {
        "role": "model",
        "parts": [
          {
            "text": "Nome: (nome encontrado no texto)\n\nTelefone: (número de telefone) ID: (ID do pedido)\n\nEndereço: (endereço encontrado no texto e (quando for exibir o cep não deixe apenas os números, represente dessa forma CEP + numero)\n\nValor: (valor encontrado no texto ou 'PAGO' se o pedido estiver pago)\n\nMétodo de pagamento: (valor encontrado no texto somente em casos que o pedido nao foi pago ou 'PAGO' se o pedido estiver pago)"
          }
        ]
    }
  ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text
}
