import { Button } from '@material-tailwind/react'
import React, { useContext, useEffect, useState } from 'react'
import Alternativa from './Alternativa'
import AlternativaRevisao from './AlternativaRevisao';
import { ProvaContext } from '../context/ProvaContext';
import transformaNumero from '../functions/auxiliares';

export default function Prova(props) {
  const [step, setStep] = useState(0);
  const {pontuacao, respostasSelecionadas, setPontuacao,setRespostasCorretas, respostasCorretas } = useContext(ProvaContext);

  function validarRespostas() {
    const respostas = Object.values(respostasSelecionadas);
  
    for (let i = 0; i < 10; i++) {
      const item = props.lista[i];
  
      const respostaCorretaIndex = item.alternativas.findIndex((alternativa) => alternativa === item.resposta);
  
      if (respostaCorretaIndex !== -1 && transformaNumero(respostaCorretaIndex) === respostas[i]) {
        setRespostasCorretas((prev) => ({
          ...prev,
          [i + 1]: transformaNumero(respostaCorretaIndex)
        }));
      }
    }
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
  useEffect(() => { 
    const acertos = Object.keys(respostasCorretas).length; ;
    setPontuacao(acertos);
    
  }, [respostasCorretas]);
  

  return (
    <>
    {step === 0 ? (
      /* Prova  */
  <section className='flex flex-col gap-4  p-2 pb-8'>
    <div className='p-4 flex flex-col gap-4'>
    <h1 className='text-3xl'>AI Question</h1>
    <p>Tema: {props.tema}</p>
    </div>
   
{props.lista.map((item, index) => (
  <div className='flex flex-col gap-4 justify-between border-gray-300 bg-white border p-4 rounded-lg lg:w-[600px]' key={index}>
    <h2 className='text-xs text-[#828282] '>Questão {index + 1}</h2> 
    <h3 className='text-base '>{item.enunciado}</h3>
    <div className='flex flex-col gap-2' >
      {item.alternativas.map((alternativa, altIndex) => (
        <Alternativa 
          texto={alternativa} 
          index={altIndex}  
          pergunta={index} 
          selecionada={false} 
        />
      ))}
    </div>
  </div>
))}
    <Button className='bg-[#9e3dff]' onClick={()=> validarRespostas()}>Confirmar respostas</Button>
    </section>
    ) :
    /* Prova corrigida */
     <section className='flex flex-col gap-4  p-2 pb-8  lg:w-[600px]'>
      <div className='p-4 flex flex-col gap-4'>
    <h1 className='text-3xl'>AI Question</h1>
    <p>Tema: {props.tema} (Revisão)</p>
    </div>
    <div className='p-4 flex items-start justify-between gap-2 border border-gray-300 bg-white lg:w-[600px]'>
      <div className='flex flex-col gap-2'>
      <p className='text-lg-'>Resultado</p>
      <p className='text-xl' style={{color: pontuacao > 5 ? 'green' : 'red'}}>{pontuacao > 6 ? 'Parábens' : 'Reprovado'}</p>

      </div>
      <div className='flex gap-8 flex-col items-center text-xl bg-[#ffffff] border border-gray-300 p-4 rounded-2xl'>
      <p className=' text-[#555555] text-sm'>Nota </p>
      <p style={{color: pontuacao > 5 ? 'green' : 'red'}} className='font-bold'> {pontuacao} </p>
      </div>
    </div>
    {props.lista.map((item, index) => (
      <div className='flex flex-col gap-4 justify-between bg-white border-gray-300 border p-4 rounded-lg lg:w-[600px]' key={index}>
        <h1 className='text-xs text-[#828282] '>Questão {index + 1}</h1> 
        <h2 className='text-base'>{item.enunciado}</h2>
        <div className='flex flex-col gap-2' >
          {item.alternativas.map((alternativa, altIndex) => (
            <AlternativaRevisao
              texto={alternativa} 
              index={altIndex}  
              pergunta={index}  
              alternativaCorreta={item.resposta}
            />
          ))}
        </div>
      </div>
    ))}
        <Button className='bg-[#1e0932]' onClick={()=> window.location.reload()}>Voltar ao inicio</Button>
        </section>
  }
    </>
  );
}