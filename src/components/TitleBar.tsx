import DarkToggle from './DarkToggle'

const TitleBar = () => (
  <header role='banner' className=' flex justify-between mb-10 tablet:mb-12'>
    <h1 className='text-white font-sans font-medium uppercase text-[40px] leading-[40px] tracking-[15px]'>
      todo
    </h1>
    <DarkToggle />
  </header>
)

export default TitleBar
