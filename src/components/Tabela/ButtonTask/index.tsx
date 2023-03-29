import { Trash } from "phosphor-react";
import { MouseEvent, useEffect, useState } from "react";

import style from './styles.module.css';

interface PropsContentButtonTask {
  content: string;
  qtdTasks: number;
}

export function ButtonTask({ content, qtdTasks }: PropsContentButtonTask) {
  const [isComplete, setIsComplite] = useState(false);

  const handleIsComplete = (event: MouseEvent<HTMLButtonElement>) => {
    setIsComplite(event.target.checked);
  }

  useEffect(() => {
    console.log(`completo ${isComplete} de ${qtdTasks}`);
  }, [isComplete])

  return (
    <div className={style.buttonTasks}>
      <label>
        <input type="checkbox" onClick={handleIsComplete} />
        <span></span>
      </label>
      {isComplete == true && <p className={style.btnLineThrough}>{content}</p>}
      {isComplete == false && <p>{content}</p>}
      <button className={style.btnDelete} ><Trash size={20} /></button>
    </div>
  );
};
