import ToDo from './components/ToDo'
import { getAll } from './services/tasks'

getAll()

function App() {
  return (
    <main className='h-[100vh] tablet:bg-lght-desk tablet:dark:bg-drk-desk bg-lght-mobile dark:bg-drk-mobile bg-contain bg-no-repeat pt-[48px] flex justify-center bg-v-lght-gry dark:bg-v-dk-blue'>
      <ToDo />
    </main>
  )
}

export default App
