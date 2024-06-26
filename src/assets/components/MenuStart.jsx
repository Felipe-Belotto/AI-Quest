import React from "react";
import { Button, Textarea } from "@material-tailwind/react";
import {motion} from "framer-motion"

export default function MenuStart(props) {

  const animacaoScale = [1.0, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.09, 1.08,1.07, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1.0];

  return (
    <div className="w-full max-w-[500px] flex flex-col gap-4 px-[5%] xl:px-0 ">
      <h1 className="text-2xl font-bold text-[#111826]">Sobre qual assunto você quer testar seus conhecimentos?</h1>
      <p className="text-base xl:text-xl text-[#4B5563]">
Personalize sua prova! Descreva o tema, nível de dificuldade e outras características que você gostaria de ver na sua prova.</p>
    <div className="mt-4">
      <Textarea
        rows={10}
        className="h-[100px] "
        label="Tema"
        value={props.mensagem}
        onChange={(e) => props.setMensagem(e.target.value)}
      
      />
      </div>

      <Button 
        className="py-2"
        disabled={!props.botaoIniciar}
        color={props.erroAPI ? "orange" : "purple"}
        onClick={() => props.handleClick()}
      >
        {props.botaoIniciar ? (
          props.erroAPI ? (
            "Tentar novamente"
          ) : (
            "Iniciar"
          )
        ) : (
          <motion.div
          animate={{ scale: animacaoScale }} // Variação da escala para o efeito de pulso
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} // Configurações da transição
          >
          <p className="flex gap-2 items-center justify-center">
            Preparando ambiente{" "}
            <img className="h-4" src="/loading.gif" alt="loading icon" />
          </p>
          </motion.div>
        )}
      </Button>
    </div>
  );
}
