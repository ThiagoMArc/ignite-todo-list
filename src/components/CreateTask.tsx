import styles from './CreateTask.module.css'
import {PlusCircle} from 'phosphor-react'
import { Task } from './Task'
import { useState } from 'react'
import { Todo } from '../models/Todo'

export function CreateTask(){

    const [newTodoText, setTodoText] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])

    function handleCreateTodo(event: any){
        event.preventDefault()
        setTodos([...todos, {id: todos.length +1, name: newTodoText, completed:false}])
        setTodoText('')
    }

    function handleNewTodoChange(event: any) {
        setTodoText(event.target.value)
    }

    return(
        <>
            <form onSubmit={handleCreateTodo} className={styles.wrapper}>
                <input type="text" placeholder="Adicione uma nova tarefa" onChange={handleNewTodoChange} value={newTodoText} />
                <button title="Criar">Criar <PlusCircle size={20} /></button>
            </form>
            <Task todos={todos}/>
        </>
    ) 
}