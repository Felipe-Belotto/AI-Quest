import React, { createContext, useState } from 'react';

export const ProvaContext = createContext();

export const ProvaProvider = ({ children }) => {
  const [pontuacao, setPontuacao] = useState(0);
  const [respostasSelecionadas, setRespostasSelecionadas] = useState({1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "",10: ""});
  const [respostasCorretas, setRespostasCorretas] = useState({});




  const values = {

    pontuacao,
    setPontuacao,
    respostasSelecionadas,
    setRespostasSelecionadas,
    setRespostasCorretas,
    respostasCorretas,
   
  }

  return (
    <ProvaContext.Provider value={values}> 
      {children}
    </ProvaContext.Provider>
  );
};