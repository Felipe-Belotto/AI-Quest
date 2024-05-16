import React from 'react'
import { Button, Input, Textarea, Typography } from '@material-tailwind/react';

export default function CardLogin(props) {
  return (
    <>
    {props.conectado ? 
      <div className='w-full lg:w-[400px] lg:h-[400px] border p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:hidden'>
      <Textarea rows={10} className=' lg:h-[250px]' label='Mensagem' value={mensagem} onChange={(e) => setMensagem(e.target.value)}  />
      <Button color='purple' onClick={() => {handleClick()}}>Começar</Button>
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
    </>
  )
}
