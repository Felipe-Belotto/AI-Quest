
import './App.css';
import { useState } from 'react';
import Prova from './assets/components/Prova';
import gerarProva from './assets/functions/gerarProva';
import MenuStart from './assets/components/MenuStart';

function App() {
  const [mensagem, setMensagem] = useState("");
  const [resposta, setResposta] = useState([]);
  const [tema, setTema] = useState("");
  const [botaoIniciar, setBotaoIniciar] = useState(true);
  const [erroAPI, setErroAPI] = useState(false);

  

  async function handleClick() {
    setErroAPI(false);
    setBotaoIniciar(false);
    setTema(mensagem);
    try {
      const resultado = await gerarProva(mensagem);
      if(resultado != "Erro ao analisar JSON"){
        setResposta(resultado);
        setBotaoIniciar(true);
      } else{
        setBotaoIniciar(true);
        setErroAPI(true);
      }
     
    } catch (error) {
      console.error(error);
    }
  }

      <Prova lista={resposta} tema={tema} voltar={()=> {setResposta("")}}/>
      const propsMenu = {botaoIniciar,mensagem,erroAPI,setMensagem,tema,setResposta,handleClick}

  return (
    <main>
    {
      resposta != "" ? 
      <Prova lista={resposta} tema={tema} voltar={()=> {setResposta("")}}/>
      :
      <MenuStart {...propsMenu}/>
    }
    </main>

   
  );
}

export default App;