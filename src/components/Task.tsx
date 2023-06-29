import { Trash } from 'phosphor-react'
import clipBoard from '../assets/clipboard.svg'
import styles from './Task.module.css'

export function Task(){
    return(
        <>
            <div className={styles.taskInfo}>
                <p className={styles.createdTask}>Tarefas Criadas <span className={styles.counter}>0</span></p>
                <p className={styles.completedTask}>Concluídas <span className={styles.counter}>0</span></p>
            </div>

            {/* <div className={styles.noTasks}>
                <img src={clipBoard} alt="" />
                <p className={styles.noTaskRegistered}>Você ainda não possui tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a seguir</p>
            </div> */}
            <div className={styles.tasks}>
                <ul>
                    <li>
                        <input type="checkbox" title="Completar tarefa" />
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        <button className={styles.trash} title="Deletar tarefa">
                            <Trash size={20} />
                        </button>
                    </li>
                    <li>
                        <input type="checkbox" title="Completar tarefa" />
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        <button className={styles.trash} title="Deletar tarefa">
                            <Trash size={20} />
                        </button>
                    </li>
                </ul>
            </div>            
        </>
    )
}