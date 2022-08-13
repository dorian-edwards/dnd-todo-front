import { useState } from 'react'

const DarkToggle = () => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    document.querySelector('html')?.classList.toggle('dark')
    return setDark(!dark)
  }

  return (
    <button
      className={`h-[26px] w-[26px] ${dark ? 'bg-light' : 'bg-dark'}`}
      onClick={toggleDark}
    />
  )
}

export default DarkToggle
