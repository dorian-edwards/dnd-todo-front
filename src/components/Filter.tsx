const Filter = ({
  onClick,
  mode,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  mode: string
}) => (
  <div className='filter filter-btn min-w-[166px] flex justify-between'>
    <button
      className={`hover:text-v-dk-gry-blue dark:hover:text-lght-gry-blue-hov ${
        mode === 'All' ? 'text-bright-blue hover:text-bright-blue' : ''
      }`}
      onClick={onClick}
      value='All'
    >
      All
    </button>
    <button
      className={`hover:text-v-dk-gry-blue dark:hover:text-lght-gry-blue-hov ${
        mode === 'Active' ? 'text-bright-blue hover:text-bright-blue' : ''
      }`}
      onClick={onClick}
      value='Active'
    >
      Active
    </button>
    <button
      className={`hover:text-v-dk-gry-blue dark:hover:text-lght-gry-blue-hov ${
        mode === 'Completed' ? 'text-bright-blue hover:text-bright-blue' : ''
      }`}
      onClick={onClick}
      value='Completed'
    >
      Completed
    </button>
  </div>
)

export default Filter
