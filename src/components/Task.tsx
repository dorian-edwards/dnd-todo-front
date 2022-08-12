import Toggle from './Toggle'

const Task = ({
  id,
  content,
  completed,
  taskToggle,
}: {
  id: string
  content: string
  completed: boolean
  taskToggle: (id: string) => void
}) => (
  <div
    className={`row task-grid border-b-[1px] border-solid border-b-v-lght-gry-blue dark:border-b-v-dk-gry-blue-dm2 text-v-dk-gry-blue dark:text-lght-gry-blue-dm ${
      completed
        ? 'line-through text-lght-gry-blue dark:text-v-dk-gry-blue-dm1'
        : ''
    }`}
    draggable='true'
  >
    <Toggle id={id} completed={completed} onClick={taskToggle} />
    <p>{content}</p>
    <button className='delete h-4 w-4 bg-cross'></button>
  </div>
)

export interface TaskObject {
  content: string
  completed: boolean
  id: string
}

export default Task
