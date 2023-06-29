import styles from './CreateTask.module.css'
import {PlusCircle} from 'phosphor-react'
import { Task } from './Task'

export function CreateTask(){
    return(
        <>
            <div className={styles.wrapper}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button title="Criar">Criar <PlusCircle size={20} /></button>
            </div>
            <Task/>
        </>
    ) 
}