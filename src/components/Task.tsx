import Toggle from './Toggle'

const Task = ({
  content,
  completed,
}: {
  content: string
  completed: boolean
}) => (
  <div
    className='row task-grid border-b-[1px] border-solid border-b-v-lght-gry-blue dark:border-b-v-dk-gry-blue-dm2 text-v-dk-gry-blue dark:text-lght-gry-blue-dm'
    draggable='true'
  >
    {/* <button className='task-toggle' /> */}
    <Toggle />
    <p>{content}</p>
    <button className='delete h-4 w-4 bg-cross'></button>
  </div>
)

export default Task
