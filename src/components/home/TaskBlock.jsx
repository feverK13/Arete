import { useState } from 'react'

import styles from '../../styles/TaskBlock.module.css'

export default function TaskBlock() {
  const [isOpen, setIsOpen] = useState(true)

  const testTask = {
    id: '1',
    title: 'Вивчити основи React',
    description: 'Прочитати документацію про компоненти, пропси та стейти. Зробити конспект.',
    status: 'TODO',
    rewardXp: 80,
    rewardCoins: 15,
    subtasks: [
      { id: 'sub-1', text: 'Прочитати про useState', isCompleted: true },
      { id: 'sub-2', text: 'Розібратися з useEffect', isCompleted: false },
      { id: 'sub-3', text: 'Створити тестовий компонент', isCompleted: false },
    ],
  }

  return (
    <>
      {isOpen ? (
        <div className={styles.taskBlock}>
          <button className={styles.returnBtn} onClick={() => setIsOpen(false)}>
            Тут буде іконка для виходу
          </button>

          <div className={styles.blockInfo}>
            <h2 className={styles.blockTitle}>{testTask.title}</h2>
            <p className={styles.blockDescription}>{testTask.description}</p>
          </div>

          <div>
            <p className={styles.blockReward}>
              Нагорода: {testTask.rewardXp} XP, {testTask.rewardCoins} монет
            </p>
            <select
              className={styles.statusSelect}
              value={testTask.status}
              onChange={e => console.log('Новий статус:', e.target.value)}
            >
              <option value='TODO'>У черзі</option>
              <option value='IN_PROGRESS'>В процесі</option>
              <option value='DONE'>Завершено</option>
            </select>
          </div>

          <div className={styles.subtasksContainer}>
            <h3 className={styles.subtasksTitle}>Завдання:</h3>
            <ul className={styles.subtaskList}>
              {testTask.subtasks.map(subtask => (
                <li key={subtask.id} className={styles.subtaskItem}>
                  <input type='checkbox' defaultChecked={subtask.isCompleted} />
                  <span>{subtask.text}</span>
                </li>
              ))}
            </ul>
            <button className={styles.addSubtask}>Додати завдання</button>
          </div>
        </div>
      ) : (
        <div className={styles.taskCard} onClick={() => setIsOpen(true)}>
          <h3 className={styles.cardTitle}>{testTask.title}</h3>
          <p className={styles.cardReward}>
            Нагорода: {testTask.rewardXp} XP, {testTask.rewardCoins} монет
          </p>
        </div>
      )}
    </>
  )
}
