import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import './App.css';
import conectaAPI from './assets/functions/conectaAPI';
import { useState } from 'react';
import Prova from './assets/components/Prova';

function App() {
  const [mensagem, setMensagem] = useState("");
  const [resposta, setResposta] = useState([]);
  const [key, setKey] = useState(localStorage.getItem("key"));
  const [conectado, setConectado] = useState(false);
  const [tema, setTema] = useState("");
  const [botaoIniciar, setBotaoIniciar] = useState(true);
  

  async function handleClick() {
    setBotaoIniciar(false);
    setTema(mensagem);
    try {
      const resultado = await conectaAPI(mensagem, key);
      setResposta(resultado);
      setBotaoIniciar(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleKey() {
    if(key.length == 39){
      localStorage.setItem("key", key)
      setConectado(true);
    }
    else{
      alert("Chave inválida")
    }

  }

  return (
    <main>
    {
      resposta != "" ? 
      <Prova lista={resposta} tema={tema} voltar={()=> {setResposta("")}}/>
      :
      <section className='flex flex-col gap-8 border p-4 rounded-lg border-gray-300 flex-wrap print:border-none print:h-auto'>
      <h1 className='text-3xl font-bold text-center print:hidden text-gray-700'>AI Question</h1>
      <section className='flex gap-4 flex-wrap '>
    {conectado ? 
    <div className='w-full lg:w-[400px] lg:h-[400px] border p-4 lg:p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:hidden'>
    <Textarea rows={10} className=' lg:h-[250px]' label='Tema' value={mensagem} onChange={(e) => setMensagem(e.target.value)}  />
    <Button  className='max-h-[40px]'{...botaoIniciar ? '' : {disabled: true}}  color='purple' onClick={() => {handleClick()}}> {botaoIniciar ? 'Iniciar' : 
    
    <p className='flex gap-2 items-center justify-center'>Preparando ambiente <img className='h-4' src='/loading.gif' alt='loading icon'/></p> }</Button>
    </div>
    :
    <div className='w-full lg:w-[400px] lg:h-[400px] border p-4 lg:p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:hidden'>
    <div className='flex flex-col gap-1'>
    <Input className='text-xs'maxLength={39} label='Informe sua chave' value={key} onChange={(e) => setKey(e.target.value)}  />
    <p className='text-xs text-gray-700'> Utilize a chave gerada pelo Google AI Studio</p>
    </div>
    <Button color='green' onClick={() => {handleKey()}}>Conectar</Button>
    </div>    
  }

    <div data-color-mode="light" className='w-full lg:w-[400px] lg:min-h-[400px] border p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:border-none print:h-auto'>
     
      </div>
      
      </section>
    </section>
    }
    </main>

   
  );
}

export default App;