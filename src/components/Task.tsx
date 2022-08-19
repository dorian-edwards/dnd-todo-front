import Toggle from './Toggle'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({
  id,
  index,
  content,
  completed,
  taskToggle,
  handleDelete,
}: {
  id: string
  index: number
  content: string
  completed: boolean
  taskToggle: (id: string) => void
  handleDelete: (id: string) => void
}) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div
        className={`row task-grid border-b-[1px] border-solid border-b-v-lght-gry-blue dark:border-b-v-dk-gry-blue-dm2 text-v-dk-gry-blue dark:text-lght-gry-blue-dm ${
          completed
            ? 'line-through text-lght-gry-blue dark:text-v-dk-gry-blue-dm1'
            : ''
        }`}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Toggle id={id} completed={completed} onClick={taskToggle} />
        <p>{content}</p>
        <button
          className='delete h-4 w-4 bg-cross text-[0px]'
          onClick={() => handleDelete(id)}
        >
          X
        </button>
      </div>
    )}
  </Draggable>
)

export interface TaskObject {
  content: string
  completed: boolean
  id: string
}

export default Task
