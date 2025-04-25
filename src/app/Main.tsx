import React from 'react'

const Main: React.FC = () => {
  return (
    <main className="bg-[rgba(226,238,238,1)] h-[481.5rem]">
      <div className="first-block relative flex flex-col items-center h-[68.56rem] overflow-x-hidden overflow-y-visible">
        <img 
          src="/assets/ellips.svg" 
          className="absolute w-[53.68rem] h-[53.68rem] z-0 mt-[3.31rem] left-1/2 transform -translate-x-1/2" 
        />

        <div className='flex flex-col items-center z-10 mt-[7.75rem] gap-[0.2vh]'>
          <h1 className="text-[rgba(12,94,67,1)] text-[3.44rem] font-normal">
            SAYUR MAGIC TEA & COFFEE
          </h1>
          <h3 className="text-[rgba(0,3,53,1)] text-[1.56rem] font-normal">
            We offer regular & decaf coffee
          </h3>
        </div>

        <img 
          src="/assets/inscoffee.svg"  
          alt="instant coffee" 
          className="absolute mt-[22.6rem] w-[87.9rem] h-[7.38rem] left-1/2 transform -translate-x-1/2 z-10 "
        />

        <img 
          src="assets/beans-1-1.svg" 
          alt="" 
          className='absolute top-[18.93rem] z-10 h-[50.875rem] animate-fade-in-down1'  
        />
        <img 
          src="assets/section-1-1-1.svg" 
          alt="" 
          className='absolute w-[25.13rem] h-[38.38rem] mt-[11.5rem] left-[11.875rem] z-10 animate-fade-in-down2' 
        />
        <img 
          src="assets/section-1-2-1.svg" 
          alt="" 
          className='absolute mt-[16.5rem] right-[13.06rem] z-10 animate-fade-in-down3' 
        />
        <img 
          src="assets/section-1-3-1.svg" 
          alt="" 
          className='absolute w-[41.87rem] h-[14.31rem] top-[53.25rem] animate-fade-in-down4' 
        />
        <img 
          src="assets/coffee-decor-1.svg" 
          alt="" 
          className='absolute w-[13.31rem] h-[19.06rem] mt-[49.8rem] z-10 left-0' 
        />
        <img 
          src="/assets/cups.svg" 
          alt="cups" 
          className='w-[56rem] h-[40rem] absolute top-[18.75rem] left-1/2 transform -translate-x-1/2 z-10' 
        />
        <img 
          src="assets/leaf-1.png"
          alt="leaf"
          className="absolute w-[45.1vw] h-[56.4vh] mt-[361.63px] left-[66.3vw] z-0"
          style={{ transform: 'rotate(17.19deg)' }}
        />
      </div>

      <div className='flex mt-[2.81rem] overflow-x-auto'>
        <img 
          src="assets/crazycoffee.png" 
          alt="coffee" 
          className='w-[47.25rem] h-[55.75rem] flex-shrink-0' 
        />          
        <div className="flex flex-col gap-[3.31rem] max-w-full">
          <div className='max-w-[51.18rem] pt-[6.43rem]'>
            <h1 className="text-[3.44rem] font-normal text-[rgba(12,94,67,1)]">
              Instant<br />
              coffee Sayur
            </h1>
          </div>
   
          <div className="flex flex-col relative max-w-full w-full">
  <p className="text-[0.93rem] md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] max-w-[46.375rem] w-full">
    Don’t let the name fool you, the Coffee Bar in Lawrence serves more than just coffee. A beautiful and spacious restaurant with an intimate atmosphere, The Coffee Bar is famous for its high quality ingredients and excellent service. This gem in Long Island has become distinguished as the place for great tasting food and decadent desserts that will be sure to satisfy every palate. An emphasis on excellence is instilled by owner Edward Davidov who has always had a strong love and passion for food and hospitality.
    <br /><br />
    His true love and aspiration was to open up a kosher dairy restaurant that everyone will enjoy. Edward who is constantly going in and out of the kitchen making sure everything is perfect and up to their standards, is also on the floor welcoming guests. All of our dishes are made from scratch daily and our portions are generous.
    <br /><br />
    Our creative chefs pay attention to the savory and visual details making each dish delicious and tantalizing. We also extend our dining area to the outside with our cozy outdoor seating. It is that dedication and care that leads the Coffee Bar, whether in the morning, afternoon, or evening to be the center of attraction.
  </p>
  <img 
    src="assets/leaf2.png" 
    alt=""  
    className="absolute top-[-1.56rem] left-[31.875rem] opacity-30 rotate-[-179.25deg]" 
  />
</div>



        </div>
      </div>
    </main>
  )
}

export default Main;
