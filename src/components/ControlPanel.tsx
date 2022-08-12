import { useState, useEffect } from 'react'
import Filter from './Filter'

const ControlPanel = ({
  onClick,
  mode,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  mode: string
}) => {
  const [tablet, setTablet] = useState(window.innerWidth > 768)

  useEffect(() => {
    window.addEventListener('resize', () => {
      return setTablet(window.innerWidth > 768)
    })
  }, [])

  return (
    <>
      <div className='ctrl-panel row mb-4 rounded-b-[5px] shadow-reg dark:shadow-none'>
        <div className='ctrl-primary flex justify-between w-full'>
          <p className='task-count c-panel-btn'>5 Items Left</p>
          {tablet && <Filter onClick={onClick} mode={mode} />}
          <button className='c-panel-btn hover:text-v-dk-gry-blue dark:hover:text-lght-gry-blue-hov'>
            Clear Completed
          </button>
        </div>
      </div>
      {!tablet && (
        <div className='row justify-center rounded-[5px] shadow-reg dark:shadow-none'>
          <Filter onClick={onClick} mode={mode} />
        </div>
      )}
    </>
  )
}

export default ControlPanel
