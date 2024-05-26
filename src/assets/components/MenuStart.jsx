import React from "react";
import { Button, Textarea } from "@material-tailwind/react";

export default function MenuStart(props) {

  return (
    <div className="w-full max-w-[500px] flex flex-col gap-4 px-[5%] xl:px-0">
      <h1 className="text-2xl font-bold text-[#111826]">Sobre qual assunto você quer testar seus conhecimentos?</h1>
      <p className="text-base xl:text-xl text-[#4B5563]">
Personalize sua prova! Descreva o tema, nível de dificuldade e outras características que você gostaria de ver na sua prova.</p>
      <Textarea
        rows={10}
        className="lg:h-[250px]"
        label="Tema"
        value={props.mensagem}
        onChange={(e) => props.setMensagem(e.target.value)}
      />

      <Button
        size="md" 
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
          <p className="flex gap-2 items-center justify-center">
            Preparando ambiente{" "}
            <img className="h-4" src="/loading.gif" alt="loading icon" />
          </p>
        )}
      </Button>
    </div>
  );
}
