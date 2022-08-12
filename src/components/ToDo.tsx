import React, { useState } from 'react'

import TaskInput from './TaskInput'
import TitleBar from './TitleBar'
import Task from './Task'
import ControlPanel from './ControlPanel'

const ToDo = () => {
  const [input, setInput] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(input)
    return setInput('')
  }

  return (
    <div className='flex flex-col content-center w-[87%] max-w-[540px]'>
      <TitleBar />
      <TaskInput onChange={onChange} value={input} onSubmit={handleSubmit} />
      <div className='task-wrapper rounded-t-[5px] overflow-hidden shadow-reg dark:shadow-none'>
        <Task content='this is a task' completed={false} />
        <Task content='this is a task' completed={false} />
      </div>
      <ControlPanel />
    </div>
  )
}
export default ToDo
