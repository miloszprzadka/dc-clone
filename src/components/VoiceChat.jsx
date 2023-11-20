import React from 'react'
import { motion, useAnimation, useScroll } from "framer-motion"
import { useEffect,useState } from 'react'
import { useInView } from 'react-intersection-observer'
 
let i = 0;

const VoiceChat = () => {
  const {ref, inView} = useInView(
    {
      threshold: 0.05
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
    else animation.stop()
    


  },[inView]);

  return (
    <div  className=''>
        <section className='pt-20 flex bg-[#f6f6f6] justify-center lg:flex-col-reverse lg:pb-20 '> 
            <motion.div animate={animation} className='w-[21%] lg:w-[100%] pt-20 lg:mr-1 lg:pt-5 '>
               <h1 className='leading-[55px] font-bold text-[48px] text-black whitespace-pre-wrap lg:text-[25px] lg:leading-normal lg:whitespace-normal  lg:ml-6'>
                Łatwe spędzanie 
                czasu
                </h1>
                <p className='pt-5 text-[20px] text-black lg:text-[15px] lg:mx-6'>
                Gdy masz czas, rozsiądź się wygodnie na 
                kanale głosowym. Znajomi na Twoim 
                serwerze widzą, że tu jesteś, i mogą wpaść 
                pogadać bez dzwonienia. 
                </p> 
            </motion.div>
            <motion.div ref={ref} animate={animation}>
              <img className='lg:w-[80%] lg:mx-auto ml-10' src='src/assets/voicechat.svg'></img>
            </motion.div>
        </section>
        
    </div>
  )
}

export default VoiceChat