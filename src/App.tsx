import { Header } from './components/Header'
import { CreateTask } from './components/CreateTask'
import './global.css'
import { Task } from './components/Task'

function App() {

  return (
    <>
        <Header/>
        <CreateTask/>
        <Task/>
    </>
  )
}

export default App
