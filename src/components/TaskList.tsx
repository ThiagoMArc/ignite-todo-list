import styles from './TaskList.module.css'
import clipBoard from '../assets/clipboard.svg'
import { Trash } from 'phosphor-react';

export function TaskList(){
    return(
        <>
            {/* <div className={styles.noTasks}>
                <img src={clipBoard} alt="" />
                <p className={styles.noTaskRegistered}>Você ainda não possui tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a seguir</p>
            </div> */}
            <div className={styles.tasks}>
                <ul>
                    <li>
                        <input type="checkbox" title="check" />
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        <button className={styles.trash} title="deletar tarefa">
                            <Trash size={20} />
                        </button>
                    </li>
                    <li>
                        <input type="checkbox" title="check" />
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        <button className={styles.trash} title="deletar tarefa">
                            <Trash size={20} />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}