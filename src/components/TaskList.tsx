import { Trash } from 'phosphor-react'
import clipBoard from '../assets/clipboard.svg'
import styles from './TaskList.module.css'
import { Todo } from '../models/Todo';

export function TaskList({todos, onDeleteTodos}: any){

    const thereIsTodos = todos.length > 0;

    function handleDeleteTodo(id: number){
        onDeleteTodos(id)
    }

    return(
        <>
            <div className={styles.taskInfo}>
                <p className={styles.createdTask}>Tarefas Criadas <span className={styles.counter}>0</span></p>
                <p className={styles.completedTask}>Concluídas <span className={styles.counter}>0</span></p>
            </div>

            {thereIsTodos ? (
                <div className={styles.tasks}>
                <ul>
                    {
                        todos.map((td:Todo) => {
                            return (
                                <li key={td.id}>
                                    <input type="checkbox" title="Completar tarefa" />
                                    {td.name}
                                    <button className={styles.trash} title="Deletar tarefa" onClick={() => {handleDeleteTodo(td.id)}}>
                                        <Trash size={20} />
                                    </button>
                                </li>
                            )        
                        })
                    }
                </ul>
            </div>
            ) : (
                <div className={styles.noTasks}>
                    <img src={clipBoard} alt="" />
                    <p className={styles.noTaskRegistered}>Você ainda não possui tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a seguir</p>
                </div>
            )}      
        </>
    )
}