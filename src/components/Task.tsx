import styles from './Task.module.css'
import {PlusCircle} from 'phosphor-react'
import { TaskList } from './TaskList'
import { useState } from 'react'
import { Todo } from '../models/Todo'

export function Task(){

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

    function deleteTodo(id: number) {
        setTodos(todos.filter(td => td.id !== id))
    }

    function completeTodo(id: number) {
        const todosCopy = [...todos]
        const todoToBeUpdated = todosCopy.find(t => t.id === id)
        
        if(todoToBeUpdated !== undefined){ 
            todoToBeUpdated.completed = !todoToBeUpdated.completed
        }

        setTodos(todosCopy)
    }

    return(
        <>
            <form onSubmit={handleCreateTodo} className={styles.wrapper}>
                <input type="text" placeholder="Adicione uma nova tarefa" onChange={handleNewTodoChange} value={newTodoText} />
                <button title="Criar">Criar <PlusCircle size={20} /></button>
            </form>
            <TaskList 
                todos={todos}
                onDeleteTodo={deleteTodo}
                onCompleteTodo={completeTodo}
            />
        </>
    ) 
}