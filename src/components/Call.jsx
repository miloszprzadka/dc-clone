import React from 'react'
import { motion, useAnimation, useScroll } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect,useState } from 'react'

let i = 0;
const Call = () => {

  const {ref, inView} = useInView(
    {
      threshold: 0
    }
  );
  const animation = useAnimation();

  useEffect(() => {
    if(i===0){
      console.log("use effect hook, inView = ",inView);
      if(inView){
        i = i + 1;
        animation.start({
          // transition:{duration: 0.6, ease: "easeOut"},
          // initial:{opacity: 0, y: 30},
          // animate:{opacity: 1, y: 0}
          y:-15,
          transition:{
            type:'spring', duration:2
          },
          opacity:[0,1]
  
        });
      }
      if(!inView){
        animation.stop();
      }
    }
    else animation.stop();


  },[inView]);

  return (
    <div className=''>
        <section className=' pt-20  bg-[#f6f6f6] pb-20 '> 
            <motion.div animate={animation} ref={ref} className='mb-10 sm:mb-0 '>
               <h1 className='w-[55%] sm:w-[80%] mx-auto leading-[55px] font-bold text-[48px] text-black whitespace-pre-wrap text-center sm:text-start sm:text-[25px] sm:whitespace-break-spaces sm:leading-none  sm:mx-5'>
                GODNA ZAUFANIA TECHNOLOGIA, BY 
                POZOSTAĆ W KONTAKCIE
                </h1>
                <p className='w-[55%] sm:w-[90%] mx-auto pt-5 text-[20px] text-black text-center sm:text-start sm:text-[15px] sm:mx-5 whitespace-pre-wrap'>
                Komunikacja głosowa i wideo o niskich opóźnieniach sprawia, 
                że czujecie się, jakbyście byli w tym samym
                pomieszczeniu. Pomachaj do kamery, 
                oglądaj streamy z gier znajomych lub zbierzcie się na sesję wspólnego 
                rysowania na współdzielonym ekranie. 
                </p>
            </motion.div>
            <motion.dev animate={animation} ref={ref}>
             <img className='justify-center  mx-auto w-[60%] h-[50%] sm:w-[90%] ' src='src/assets/call.svg'></img>
            </motion.dev>
            <div className='flex justify-center mb-10 sm:mt-10  sm:ml-5'>
                <h1 className='absolute text-black text-[32px] sm:mx-auto sm:relative'>Chcesz zacząć swoją podróż?</h1>
                <img className='relative sm:hidden' src='src/assets/stars.svg'></img>
            </div>
            <button className='flex text-white mx-auto bg-[#5865f2] rounded-[28px] text-[20px] p-3 sm:text-[27px] sm:mx-5'>Pobierz dla systemu Windows</button>
        </section>
    </div>
  )
}

export default Call