import styles from './Task.module.css'
import { TaskList } from './TaskList'

export function Task(){
    return(
        <>
            <div className={styles.taskInfo}>
                <p className={styles.createdTask}>Tarefas Criadas <span className={styles.counter}>0</span></p>
                <p className={styles.completedTask}>Concluídas <span className={styles.counter}>0</span></p>
            </div>
            <TaskList/>            
        </>
    )
}