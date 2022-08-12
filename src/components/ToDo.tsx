import React, { useState, useEffect } from 'react'
import { getTasks } from '../services/tasks'
import TaskInput from './TaskInput'
import TitleBar from './TitleBar'
import Task, { TaskObject } from './Task'
import ControlPanel from './ControlPanel'

const ToDo = () => {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const getData = async () => {
      const data = await getTasks()
      setTasks(data.data)
    }

    getData()
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(input)
    return setInput('')
  }

  const handleFilterToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget
    setFilter(value)
  }

  const displayTasks =
    filter === 'All'
      ? [...tasks]
      : filter === 'Active'
      ? tasks.filter((task: TaskObject) => !task.completed)
      : tasks.filter((task: TaskObject) => task.completed)

  return (
    <div className='flex flex-col content-center w-[87%] max-w-[540px]'>
      <TitleBar />
      <TaskInput onChange={onChange} value={input} onSubmit={handleSubmit} />
      <div className='task-wrapper rounded-t-[5px] overflow-hidden shadow-reg dark:shadow-none'>
        {tasks &&
          displayTasks.map((task: TaskObject) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              completed={task.completed}
            />
          ))}
      </div>
      <ControlPanel onClick={handleFilterToggle} mode={filter} />
    </div>
  )
}

export default ToDo
