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

  async function handleClick() {
    setTema(mensagem);
    try {
      const resultado = await conectaAPI(mensagem, key);
      setResposta(resultado);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleKey() {
    if(key.length == 39){
      setConectado(!conectado)
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
      <h1 className='text-3xl font-bold text-center print:hidden'>AI Quest</h1>
      <section className='flex gap-4 flex-wrap '>
    {conectado ? 
    <div className='w-full lg:w-[400px] lg:h-[400px] border p-4 lg:p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:hidden'>
    <Textarea rows={10} className=' lg:h-[250px]' label='Tema' value={mensagem} onChange={(e) => setMensagem(e.target.value)}  />
    <Button color='purple' onClick={() => {handleClick()}}>Começar</Button>
    </div>
    :
    <div className='w-full lg:w-[400px] lg:h-[400px] border p-4 lg:p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:hidden'>
    <div className='flex flex-col gap-1'>
    <Input className='text-xs'maxLength={39} label='Informe sua chave' value={key} onChange={(e) => localStorage.setItem("key", e.target.value)}  />
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