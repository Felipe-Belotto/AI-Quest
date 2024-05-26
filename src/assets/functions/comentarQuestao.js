import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function comentarQuestao(props) {

  const key = import.meta.env.VITE_GEMINI;

  const genAI = new GoogleGenerativeAI(key);
/*   const model = genAI.getGenerativeModel({ model: "gemini-pro" }); */
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const chat = model.startChat({
    generationConfig: {
      maxOutputTokens: 100000,
    },
  });

  const mensagem = `Gere um breve comentário sobre a resposta que o usuário deu em relação ao enunciado, até no máximo duas linhas. Caso a resposta do usuário seja correta, apenas escreva uma mensagem de parabens algo como "Parabens, voce acertou" ou algo do gênero. ${props.enunciado} com a alternativa ${props.alternativa} e com a alternativa correta ${props.alternativaCorreta}`


    try {
      const result = await chat.sendMessage(mensagem);
      const response = await result.response;
      const text = await response.text();
      return text;
    } catch (error) {
      console.error( error);
      return "Erro ao gerar comentário";
    
  }
}