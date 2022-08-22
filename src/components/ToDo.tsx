import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {
  getTasks,
  toggleCompleted,
  createTask,
  deleteTask,
  clearTasks,
  moveTask,
} from '../services/tasks'
import TaskInput from './TaskInput'
import TitleBar from './TitleBar'
import Task, { TaskObject } from './Task'
import ControlPanel from './ControlPanel'

const ToDo = () => {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = React.useState<Array<TaskObject>>([])
  const [filter, setFilter] = useState('All')
  const [taskOrder, setTaskOrder] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getTasks()
      setTasks(data.data.tasks)
      setTaskOrder(data.data.taskOrder)
    }

    getData()
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = input.trim()
    if (content) {
      const { data } = await createTask({ content })
      if (data.status === 'success') {
        const { task, taskOrder } = data.data
        setTasks(tasks.concat(task))
        setTaskOrder(taskOrder)
      }
    }

    return setInput('')
  }

  const handleDelete = async (id: string) => {
    const data = await deleteTask(id)
    if (data.status === 'success') {
      setTasks(tasks.filter((task: TaskObject) => task.id !== id))
      setTaskOrder(taskOrder.filter((taskId: string) => taskId !== id))
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
      setTaskOrder(data.data.taskOrder)
    }
  }

  const handleOnDragEnd = async (result: any) => {
    const { draggableId, source, destination } = result
    const newTaskOrder = [...taskOrder]
    const taskIdToMove = newTaskOrder[source.index]

    newTaskOrder.splice(source.index, 1)
    newTaskOrder.splice(destination.index, 0, taskIdToMove)

    const newTaskList = newTaskOrder.map((id: string) => {
      const task = tasks.find((el) => el.id === id)
      if (task !== undefined) return task

      return { content: 'oops', id: '', completed: false }
    })

    setTasks(newTaskList)
    setTaskOrder(newTaskOrder)
    const data = await moveTask(draggableId, source.index, destination.index)
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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='todo-column'>
          {(provided) => (
            <div
              id='todo-column'
              className='task-wrapper rounded-t-[5px] overflow-scroll max-h-[60vh] shadow-reg dark:shadow-none'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks &&
                displayTasks.map((task: TaskObject, index: number) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    index={index}
                    content={task.content}
                    completed={task.completed}
                    taskToggle={handleTaskToggle}
                    handleDelete={handleDelete}
                  />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ControlPanel
        onClick={handleFilterToggle}
        mode={filter}
        completed={completed}
        handleClear={handleClear}
      />
      <div className='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://dorianedwards.dev' target='_blank' rel='noreferrer'>
          Dorian Edwards
        </a>
        .
      </div>
    </div>
  )
}

export default ToDo
