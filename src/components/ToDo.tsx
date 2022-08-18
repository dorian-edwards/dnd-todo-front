import React, { useState, useEffect } from 'react'
import {
  getTasks,
  toggleCompleted,
  createTask,
  deleteTask,
  clearTasks,
} from '../services/tasks'
import TaskInput from './TaskInput'
import TitleBar from './TitleBar'
import Task, { TaskObject } from './Task'
import ControlPanel from './ControlPanel'

const ToDo = () => {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = React.useState<Array<TaskObject>>([])
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

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = input.trim()
    if (content) {
      const data = await createTask({ content })
      if (data.status === 'success') {
        setTasks(tasks.concat(data.data))
      }
    }

    return setInput('')
  }

  const handleDelete = async (id: string) => {
    const data = await deleteTask(id)
    if (data.status === 'success') {
      setTasks(tasks.filter((task: TaskObject) => task.id !== id))
    }
  }

  const handleFilterToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget
    setFilter(value)
  }

  const handleTaskToggle = async (id: string) => {
    const data = await toggleCompleted(id)
    if (data.status === 'success') {
      const newTask = data.data
      setTasks(
        tasks.map((task: TaskObject) =>
          task.id === newTask.id ? newTask : task
        )
      )
    }
  }

  const handleClear = async () => {
    const data = await clearTasks()
    if (data.status === 'success') {
      setTasks(tasks.filter((task: TaskObject) => !task.completed))
    }
  }

  const displayTasks =
    filter === 'All'
      ? [...tasks]
      : filter === 'Active'
      ? tasks.filter((task: TaskObject) => !task.completed)
      : tasks.filter((task: TaskObject) => task.completed)

  const completed = tasks.filter((task: TaskObject) => !task.completed).length

  return (
    <div className='flex flex-col content-center w-[87%] max-w-[540px]'>
      <TitleBar />
      <TaskInput onChange={onChange} value={input} onSubmit={handleSubmit} />
      <div className='task-wrapper rounded-t-[5px] overflow-scroll max-h-[60vh] shadow-reg dark:shadow-none'>
        {tasks &&
          displayTasks.map((task: TaskObject) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              completed={task.completed}
              taskToggle={handleTaskToggle}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      <ControlPanel
        onClick={handleFilterToggle}
        mode={filter}
        completed={completed}
        handleClear={handleClear}
      />
    </div>
  )
}

export default ToDo
