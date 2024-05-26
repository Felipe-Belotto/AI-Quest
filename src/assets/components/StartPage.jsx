import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import MenuStart from './MenuStart'

export default function StartPage(props) {
  const [start, setStart] = useState(false)



  return (
  <>

  <header className='hidden lg:block fixed  left-[5%] top-8'>
    <img className='w-14' src="/coruja.png" alt="" />
  </header>

  <section className='flex flex-col justify-between items-center w-full xl:flex-row 2xl:px-[15%] px-[5%] gap-8'>
  
    <div className='flex flex-col gap-4'>
    <h1 className='text-2xl xl:text-4xl text-[#111826] font-bold max-w-[535px] 2xl:w-[535px]'>Reinvente seus estudos com provas feitas pela IA</h1>
    <p className='text-base xl:text-xl text-[#4B5563] max-w-[734px]'>Uma ferramenta em desenvolvimento para potencializar seus estudos. Crie provas personalizadas em segundos, adaptados às suas necessidades e ritmo de estudo, com diferentes tipos de avaliação e níveis de dificuldade.</p>
    <div className='flex flex-col lg:block'>
    <Button color='purple' className='mt-6 xl:mt-12' onClick={props.start}>Começar</Button>
    </div>
    </div>

  <img className='hidden 2xl:block 2xl:max-w-[500px]' src="/mockup.png" alt="" />
  </section>
  </>

  )
}
