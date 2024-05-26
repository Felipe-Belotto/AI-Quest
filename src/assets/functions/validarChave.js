import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function validarChave() {

  const key = import.meta.env.VITE_GEMINI_KEY;

  const genAI = new GoogleGenerativeAI(key);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  /* const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" }); */

  const chat = model.startChat({
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  try{
    const result = await chat.sendMessage(`Se você está lendo essa mensagem me responda com "Tudo certo" sem nada além da frase, não coloque ponto final nem nada do gênero, apenas Tudo certo`);
    const response = await result.response;
    const text = await response.text();
    console.log(text)
    return text == "Tudo certo"
  } catch (error) {
    console.error(error);
    return false
  }
      
}