import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function gerarProva(msg, key) {

  const genAI = new GoogleGenerativeAI(key);
/*   const model = genAI.getGenerativeModel({ model: "gemini-pro" }); */
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const chat = model.startChat({
    generationConfig: {
      maxOutputTokens: 100000,
    },
  });


    try {
      const result = await chat.sendMessage(`Crie 10 perguntas de múltipla escolha sobre ${msg} com 5 alternativas cada. Cada pergunta deve ter apenas uma resposta correta. Retorne o resultado em formato JSON mas tenha consciencia que o resultado da sua resposta passara pela função JSON.parse então envie de acordo com os requisitos necessarios para ela nao dar erro, não retorne em codeblock, não irei visualizar, mande somente [{},] o array e os objetos que compõem o JSON
      ,Certifique-se que alternativas: será sempre um array e nunca uma string e que as alternativas não estão dentro de arrays adicionais, o que tornara a estrutura inválida. O JSON espera que as alternativas sejam um array direto, não um array de arrays. Resposta nunca será uma string vazia. Se atente para nunca faltar aspas necessárias para manter a aplicação estavel.Caso seja perguntado de Star Wars, não de o exemplo abaixo sempre tente ser criativo. Cuidado com SyntaxError pois irei usar o seu retorno para transformar em json.parse() .Você vai retornar como nesse exemplo:[
        {
          "enunciado": "Qual é o nome do planeta natal de Luke Skywalker?",
          "alternativas": ["Tatooine", "Alderaan", "Naboo", "Coruscant", "Endor"],
          "resposta": "Tatooine"
        },
        {
          "enunciado": "Quem é o líder da rebelião contra o Império?",
          "alternativas": ["Darth Vader", "Obi-Wan Kenobi", "Mon Mothma", "Han Solo", "Yoda"],
          "resposta": "Mon Mothma"
        },
        {
          "enunciado": "Qual é a arma característica de Han Solo?",
          "alternativas": ["Sabre de luz", "Blaster", "Pistola", "Arco e flecha", "Espada"],
          "resposta": "Blaster"
        },
        {
          "enunciado": "Qual é o nome da nave espacial de Han Solo?",
          "alternativas": ["Millennium Falcon", "X-Wing", "TIE Fighter", "Death Star", "Y-Wing"],
          "resposta": "Millennium Falcon"
        },
        {
          "enunciado": "Quem é o mestre Jedi que treina Luke Skywalker?",
          "alternativas": ["Yoda", "Obi-Wan Kenobi", "Qui-Gon Jinn", "Mace Windu", "Palpatine"],
          "resposta": "Obi-Wan Kenobi"
        },
        {
          "enunciado": "Qual é o nome do planeta onde a base rebelde é localizada?",
          "alternativas": ["Endor", "Hoth", "Yavin IV", "Dagobah", "Tatooine"],
          "resposta": "Yavin IV"
        },
        {
          "enunciado": "Qual é o nome do famoso caçador de recompensas que persegue Han Solo?",
          "alternativas": ["Boba Fett", "Jabba the Hutt", "Lando Calrissian", "Greedo", "Wicket"],
          "resposta": "Boba Fett"
        },
        {
          "enunciado": "Qual é a principal arma do Império?",
          "alternativas": ["Death Star", "TIE Fighter", "Super Star Destroyer", "AT-AT", "TIE Bomber"],
          "resposta": "Death Star"
        },
        {
          "enunciado": "Qual é o nome do planeta onde Luke Skywalker encontra Yoda?",
          "alternativas": ["Dagobah", "Hoth", "Tatooine", "Endor", "Naboo"],
          "resposta": "Dagobah"
        },
        {
          "enunciado": "Qual é o nome do planeta onde a corrida de pods acontece?",
          "alternativas": ["Tatooine", "Naboo", "Coruscant", "Alderaan", "Endor"],
          "resposta": "Tatooine"
        }
      ]`);
      const response = await result.response;
      const text = await response.text();
      const cleanedText = text.trim(); 
      const json = JSON.parse(cleanedText);
      return json;
    } catch (error) {
      console.error("Erro ao analisar JSON:", error);
      return "Erro ao analisar JSON";
    
  }
}