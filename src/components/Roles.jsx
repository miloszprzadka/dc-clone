import React from 'react'
import { motion, useAnimation, useScroll } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect,useState } from 'react'

let i = 0;

const Roles = () => {

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
    else animation.stop(); 


  },[inView]);

  return (
    <div className='m-20'>
        <section className='flex bg-white justify-center '>
          <motion.div animate={animation}>
            <img ref={ref} className='w-[700px] h-[500px]' src='src/assets/roles.svg'></img>
          </motion.div>
            <motion.div animate={animation} ref={ref} className='pl-20'>
               <h1 className=' leading-[55px] font-bold text-[48px] text-black whitespace-nowrap'>
                Od garstki osób 
                <br class="block" />
                do całego
                <br class="block" />
                fandomu
                </h1>
                <p className='pt-5 text-[20px] text-black'>
                Zgromadź dowolną społeczność dzięki 
                <br class="block" />
                narzędziom moderowania i personalizacji 
                <br class="block" />
                dostępu użytkowników. Daj członkom 
                <br class="block" />
                społeczności specjalne moce, uruchom 
                <br class="block" />
                kanały prywatne i nie tylko.
                </p> 
            </motion.div>
            
        </section>
    </div>
  )
}

export default Roles