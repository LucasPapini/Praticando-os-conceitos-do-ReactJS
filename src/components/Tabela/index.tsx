import { ClipboardText } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { ButtonTask } from './ButtonTask';
import style from './styles.module.css';

interface PropsNewTasks {
  tasks: [];
}

export function Tabela({ tasks }: PropsNewTasks) {
  const [taskCreate, setTaskCreate] = useState(0);
  const [taskClosed, setTaskClosed] = useState(0);


  useEffect(() => {
    const allTasksCreate = tasks.length;
    setTaskCreate(allTasksCreate);
  }, [tasks]);

  return (
    <div className={style.container}>
      {/*
      * Menu navegação
      */}
      <nav>
        <ul>
          <li><button>Tarefas criadas <span>{taskCreate}</span></button></li>
          <li><button>Concluidas <span>{taskClosed}</span></button></li>
        </ul>
      </nav>

      {tasks.length != 0 && tasks.map((task, index) => {
        return (
          <ButtonTask key={index + task} content={task} qtdTasks={taskCreate} />
        )
      })}

      {tasks.length === 0 && <div className={style.noHaveTodo}>
        <ClipboardText size={56} />
        <h2>Você ainda não tem tarefas cadastradas</h2>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>}
    </div >
  );
};
