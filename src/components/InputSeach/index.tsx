import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Tabela } from '../Tabela';

import styles from './styles.module.css';

export function InputSearch() {
  const [tasks, setTasks] = useState([]);
  const [newTaskChage, setNewTaskChage] = useState("");

  function handlePostTask(e: FormEvent) {
    e.preventDefault();
    setTasks([...tasks, newTaskChage]);
    setNewTaskChage("");
  }

  function handleNewTaskChage(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setNewTaskChage(e.target.value);
  }

  function handleTasksInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("O Campo é obrigatório!");
  }

  return (
    <>
      <form className={styles.inputSearch} onSubmit={handlePostTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChage}
          value={newTaskChage}
          onInvalid={handleTasksInvalid}
          required
        />
        <button>
          <span>Criar <PlusCircle size={20} /></span>
        </button>
      </form>
      <Tabela tasks={tasks} />
    </>
  );
};
