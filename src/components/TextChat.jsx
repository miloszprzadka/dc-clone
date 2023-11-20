import React from 'react'
import { motion, useAnimation, useScroll } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect,useState } from 'react'

let i = 0;

const TextChat = () => {
  

  const {ref, inView} = useInView(
    {
      threshold: 0
    }
  );
  const animation = useAnimation();

  useEffect(() => {
    if(i===0){
      if(inView){
        i = i + 1;
        console.log(i);
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
        animation.stop()    
      }
    }
    else animation.stop()
    



  },[inView]);
    

  return (
    <div className='m-20 lg:m-0 lg:mt-20 '>
        <section className='flex bg-white justify-center  lg:flex-col'>
          <motion.div animate={animation}>
            <img className=' w-[90%] lg:w-[90%] lg:ml-6 ml-10' ref={ref} src='src/assets/textchat.svg'></img>
          </motion.div>
            <motion.div ref={ref} animate={animation} className='w-[29%] lg:w-[100%] pl-20 lg:pl-0 lg:flex-col lg:mb-20'>
               <h1 className='leading-[55px] font-bold text-[48px] text-black whitespace-break-spaces lg:text-[20px] lg:leading-none lg:justify-start lg:whitespace-normal lg:mx-6 '>
                Stwórz miejsce  
                dostępne na
                zaproszenie,
                gdzie czujesz się 
                u siebie
                </h1>
                <p className='pt-5 text-[20px] text-black lg:text-[15px] lg:justify-start lg:flex lg:mx-6'>
                Serwery Discorda zorganizowane są w 
                kanały tematyczne, na których można 
                współpracować, udostępniać materiały lub 
                po prostu pogadać bez zapychania czatu 
                grupowego.
                </p> 
            </motion.div>
            
        </section>
    </div>
  )
}

export default TextChat