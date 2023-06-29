import { Trash } from 'phosphor-react'
import clipBoard from '../assets/clipboard.svg'
import styles from './Task.module.css'
import { Todos } from '../models/Todos'

export function Task({todos}: Todos){

    const thereIsTodos = todos.length > 0;

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
                        todos.map(td => {
                            return (
                                <li key={td.id}>
                                    <input type="checkbox" title="Completar tarefa" />
                                    {td.name}
                                    <button className={styles.trash} title="Deletar tarefa">
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