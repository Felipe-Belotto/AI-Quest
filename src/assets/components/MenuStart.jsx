import React from 'react'
import { Button, Textarea,  } from '@material-tailwind/react';

export default function MenuStart(props) {
  return (
    <section className='flex flex-col gap-8 border p-4 rounded-lg border-gray-300 flex-wrap print:border-none print:h-auto'>
    <h1 className='text-3xl font-bold text-center print:hidden text-gray-700'>AI Question</h1>
    <div className='flex gap-4 flex-wrap '>
    <div className='w-full lg:w-[400px] lg:h-[400px] border p-4 lg:p-8 flex flex-col justify-between rounded-lg border-gray-300 gap-4 print:hidden'>
    <Textarea rows={10} className=' lg:h-[250px]' label='Tema' value={props.mensagem} onChange={(e) => props.setMensagem(e.target.value)}  />
    <Button  className='max-h-[40px]'{...props.botaoIniciar ? '' : {disabled: true}}  color={props.erroAPI ? 'orange' : 'purple'} onClick={() => {props.handleClick()}}> {props.botaoIniciar ? props.erroAPI ? 'Tentar novamente' : 'Iniciar' : 
  
    <p className='flex gap-2 items-center justify-center'>Preparando ambiente <img className='h-4' src='/loading.gif' alt='loading icon'/></p> }</Button>
    </div>
    
    </div>
  </section>
  )
}
