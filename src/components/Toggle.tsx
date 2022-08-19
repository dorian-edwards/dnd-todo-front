const TaskToggle = ({
  id,
  completed,
  onClick,
}: {
  id: string
  completed: boolean
  onClick: (id: string) => void
}) => (
  <button className='w-fit text-[0px]' onClick={() => onClick(id)}>
    X
    <span
      className={`block h-5 w-5 rounded-full bg-v-lght-gry-blue dark:bg-v-dk-gry-blue-dm2 relative hover:bg-rnbw ${
        completed ? 'bg-rnbw hover:bg-rnbw' : ''
      }`}
    >
      <span
        className={`block h-[18px] w-[18px] rounded-full bg-white dark:bg-v-dk-desat-blue absolute top-[1px] left-[1px] bg-no-repeat bg-center ${
          completed ? 'bg-rnbw-complete hover:bg-rnbw-complete' : ''
        }`}
      ></span>
    </span>
  </button>
)

export default TaskToggle
