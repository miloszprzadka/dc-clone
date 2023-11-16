import React from 'react'

const Main = () => {
  return (
    <div>
      <section
        class="p-10 relative bg-[#404eed] bg-[url('src/assets/clouds.svg')] bg-no-repeat bg-center h-[575px]">
        <img
          className='absolute bottom-0 right-0 left-3 w-[30%]  block '
          src='src/assets/main1.svg'>
        </img>
        <img
          className='absolute bottom-0 right-0  md:-[10%] w-[25%]  block'
          src='src/assets/main2.svg'>
        </img>
        <div
          class="flex flex-col gap-8  items-center  
           h-[70vh] xl:h-[40vh] mb-10   "
        >
          <h1 class="text-center text-6xl tracking-widest whitespace-nowrap">
            WYOBRAŹ SOBIE 
            <br class="block" />
            MIEJSCE...
          </h1>
          <p
            class="relative text-center text-lg  tracking-wider leading-normal "
          >
            ...gdzie możesz należeć do szkolnego klubu, grupy osób grających w gry czy globalnej 
            <br class="block" />
            społeczności artystów. Gdzie możesz po prostu spędzać czas z garstką znajomych. Miejsce, 
            <br class="block" />
            które ułatwia codzienne rozmowy i częstsze spędzanie czasu razem.
          </p>
          <div className='flex gap-x-5 text-[25px] '>
            <button className='relative py-2 px-3 rounded-[40px] text-black bg-white'>Pobierz dla systemu Windows</button>
            <button className='py-2 px-3 rounded-[40px] bg-[#23272a]'>Otwórz Discorda w przeglądarce</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main