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
    <div className='m-20'>
        <section className='flex bg-white justify-center '>
          <motion.div animate={animation}>
            <img ref={ref} src='src/assets/textchat.svg'></img>
          </motion.div>
            <motion.div ref={ref} animate={animation} className='pl-20'>
               <h1 className=' leading-[55px] font-bold text-[48px] text-black whitespace-nowrap'>
                Stwórz miejsce 
                <br class="block" />
                dostępne na
                <br class="block" />
                zaproszenie,
                <br class="block" />
                gdzie czujesz się 
                <br class="block" />
                u siebie
                </h1>
                <p className='pt-5 text-[20px] text-black'>
                Serwery Discorda zorganizowane są w 
                <br class="block" />
                kanały tematyczne, na których można 
                <br class="block" />
                współpracować, udostępniać materiały lub 
                <br class="block" />
                po prostu pogadać bez zapychania czatu 
                <br class="block" />
                grupowego.
                </p> 
            </motion.div>
            
        </section>
    </div>
  )
}

export default TextChat