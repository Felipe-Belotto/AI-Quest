import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import './App.css';
import conectaAPI from './assets/functions/conectaAPI';
import { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

function App() {
  const [mensagem, setMensagem] = useState("");
  const [resposta, setResposta] = useState("");
  const [key, setKey] = useState("");
  const [conectado, setConectado] = useState(false);

  async function handleClick() {
      setResposta( await conectaAPI(mensagem, key))
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
    <main className='flex flex-col gap-8 border p-8 rounded-lg border-gray-300 flex-wrap print:border-none print:h-auto'>
      <h1 className='text-3xl font-bold text-center print:hidden'>Preparar pedido</h1>
      <section className='flex gap-4 flex-wrap '>
    {conectado ? 
    <div className='w-full lg:w-[400px] lg:h-[400px] border p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:hidden'>
    <Textarea rows={10} className=' lg:h-[250px]' label='Mensagem' value={mensagem} onChange={(e) => setMensagem(e.target.value)}  />
    <Button color='purple' onClick={() => {handleClick()}}>Localizar</Button>
    </div>
    :
    <div className='w-full lg:w-[400px] lg:h-[400px] border p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:hidden'>
    <div className='flex flex-col gap-1'>
    <Input className='text-xs'maxLength={39} label='Informe sua chave' value={key} onChange={(e) => setKey(e.target.value)}  />
    <p className='text-xs text-gray-700'> Utilize a chave gerada pelo Google AI Studio</p>
    </div>
    <Button color='green' onClick={() => {handleKey()}}>Conectar</Button>
    </div>    
  }

    <div data-color-mode="light" className='w-full lg:w-[400px] lg:h-[400px] border p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:border-none print:h-auto'>
        <MarkdownPreview style={{backgroundColor: '#f8f8ff'}} source={resposta} />
       { resposta && <Button className='print:hidden' onClick={() => {
        window.print()
       }}>Imprimir</Button>}
      </div>
      </section>
    </main>
  );
}

export default App;