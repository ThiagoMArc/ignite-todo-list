import styles from './TaskList.module.css'
import clipBoard from '../assets/clipboard.svg'

export function TaskList(){
    return(
        <>
            <div className={styles.tasks}>
                <img src={clipBoard} alt="" />
                <p className={styles.noTaskRegistered}>Você ainda não possui tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a seguir</p>
            </div>
        </>
    );
}