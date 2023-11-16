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
            <motion.div animate={animation} ref={ref} className='mb-10 '>
               <h1 className='leading-[55px] font-bold text-[48px] text-black whitespace-nowrap text-center'>
                GODNA ZAUFANIA TECHNOLOGIA, BY 
                <br class="block" />
                POZOSTAĆ W KONTAKCIE
                </h1>
                <p className='pt-5 text-[20px] text-black text-center'>
                Komunikacja głosowa i wideo o niskich opóźnieniach sprawia, 
                że czujecie się, jakbyście byli w tym samym
                <br class="block" />
                pomieszczeniu. Pomachaj do kamery, 
                oglądaj streamy z gier znajomych lub zbierzcie się na sesję wspólnego 
                <br class="block" />
                rysowania na współdzielonym ekranie. 
                </p>
            </motion.div>
            <motion.dev animate={animation} ref={ref}>
             <img className='justify-center  mx-auto w-[60%] h-[50%] ' src='src/assets/call.svg'></img>
            </motion.dev>
            <div className='flex  justify-center mb-10'>
                <h1 className='absolute text-black text-[32px] '>Chcesz zacząć swoją podróż?</h1>
                <img className='relative' src='src/assets/stars.svg'></img>
            </div>
            <button className='flex text-white mx-auto bg-[#5865f2] rounded-[28px] text-[20px] p-3'>Pobierz dla systemu Windows</button>
        </section>
    </div>
  )
}

export default Call