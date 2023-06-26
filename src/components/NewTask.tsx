import styles from './NewTask.module.css'
import {PlusCircle} from 'phosphor-react'

export function NewTask(){
    return(
        <>
            <div className={styles.wrapper}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button title="Criar">Criar <PlusCircle size={20} /></button>
            </div>
        </>
    ) 
}