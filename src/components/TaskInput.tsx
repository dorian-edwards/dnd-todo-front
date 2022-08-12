const TaskInput = ({
  onChange,
  value,
  onSubmit,
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}) => (
  <div className='row mb-4 tablet:mb-6 task-grid rounded-[5px] shadow-reg dark:shadow-nonec'>
    <button className='task-toggle'></button>
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder='Create a new todo ...'
        className='w-full text-independence dark:text-lght-gry-blue-dm focus:outline-none bg-transparent'
        onKeyDown={(e) => e.key === 'Enter' && onSubmit}
      />
    </form>
  </div>
)
export default TaskInput
