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
    <div className='mt-20 mb-20 '>
        <section className='flex bg-white justify-center  lg:flex-col'>
          <motion.div animate={animation}>
            <img ref={ref} className='w-[600px] lg:w-[90%] lg:mx-auto' src='src/assets/roles.svg'></img>
          </motion.div>
            <motion.div animate={animation} ref={ref} className='w-[25%] lg:w-[100%] pl-20 lg:pl-0 '>
               <h1 className=' leading-[55px] font-bold text-[48px] text-black whitespace-pre-wrap lg:text-[20px] lg:whitespace-normal lg:ml-6'>
                Od garstki osób 
                do całego
                fandomu
                </h1>
                <p className='pt-5 text-[20px] text-black lg:text-[15px] lg:mx-6'>
                Zgromadź dowolną społeczność dzięki 
                narzędziom moderowania i personalizacji 
                dostępu użytkowników. Daj członkom 
                społeczności specjalne moce, uruchom 
                kanały prywatne i nie tylko.
                </p> 
            </motion.div>
            
        </section>
    </div>
  )
}

export default Roles