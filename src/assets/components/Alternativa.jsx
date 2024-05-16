import { Button } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { ProvaContext } from '../context/ProvaContext';
import transformaNumero from '../functions/auxiliares';

export default function Alternativa(props) {
  const { respostasSelecionadas, setRespostasSelecionadas } = useContext(ProvaContext);

  const alternativaLetra = transformaNumero(props.index);

  function entregarAlternativa(perguntaIndex, respostaSelecionada) {
   const selecionadas = respostasSelecionadas;
   setRespostasSelecionadas({ ...selecionadas, [perguntaIndex + 1]: transformaNumero(respostaSelecionada) });
  }

  function verificaAlternativa() {
    const valorAtual = respostasSelecionadas[props.pergunta + 1]; 
    const alternativaAtual = transformaNumero(props.index);
  
    if (valorAtual === alternativaAtual) {
      return true;
    } else {
      return false;
    }
  }

  const verifica = verificaAlternativa();


  return (
    <>
      {verifica ? (
        <Button
          className={"border text-[#9e3dff] bg-[#dcdcdc] flex gap-8 items-center shadow font-bold scale-105"}
          key={props.index}
          disabled
        >
          <div className='bg-[#f5f5f5] rounded-full w-6 h-6 text-xs flex justify-center items-center border'>
            {alternativaLetra}
          </div>
          {props.texto}
        </Button>
      ) : (
        <Button
          className={"border text-[#555555] bg-[#f5f5f5] flex gap-8 items-center"}
          key={props.index}
          onClick={() => entregarAlternativa(props.pergunta, props.index)}
        >
          <div className='bg-[#f5f5f5] rounded-full w-6 h-6 text-xs flex justify-center items-center border'>
            {alternativaLetra}
          </div>
          {props.texto}
        </Button>
      )}
    </>
  );
}