
import './App.css';
import { useState } from 'react';
import Prova from './assets/components/Prova';
import gerarProva from './assets/functions/gerarProva';
import MenuStart from './assets/components/MenuStart';
import StartPage from './assets/components/StartPage';
import Footer from './assets/components/Footer';

function App() {
  const [mensagem, setMensagem] = useState("");
  const [resposta, setResposta] = useState([]);
  const [tema, setTema] = useState("");
  const [botaoIniciar, setBotaoIniciar] = useState(true);
  const [erroAPI, setErroAPI] = useState(false);
  const [startPage, setStartPage] = useState(true);

  

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

  const handleStartPage = () => {
    setStartPage(false);
  }

      const propsMenu = {botaoIniciar,mensagem,erroAPI,setMensagem,tema,setResposta,handleClick}

  return (
    <>
    <main className='w-[100vw] min-h-[95vh] flex justify-center items-center flex-1'>
    {
      resposta != "" ? 
      <Prova lista={resposta} tema={tema} voltar={()=> {setResposta("")}}/>
      :
      startPage ?
      <StartPage start={handleStartPage}/> :
      <MenuStart {...propsMenu}/>
    }
    </main>

    <Footer/>
    </>

   
  );
}

export default App;