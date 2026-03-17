import { useEffect } from 'react'

import Button from '../../ui/Button'
import StatusSelect from '../../ui/StatusSelect'
import styles from './TaskModal.module.css'

export default function TaskModal({ task, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className={styles.expandedCardContainer}>
      <div className={styles.expandedCard}>
        <div className={styles.blockInfo}>
          <button className={styles.returnBtn} onClick={onClose}>
            <svg
              className={styles.returnIcon}
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M19 19v-4q0-1.25-.875-2.125T16 12H6.825l3.6 3.6L9 17l-6-6l6-6l1.425 1.4l-3.6 3.6H16q2.075 0 3.538 1.463T21 15v4z'
              ></path>
            </svg>
            Назад
          </button>
          <h2 className={styles.cardTitle}>{task.title}</h2>
          <p className={styles.blockDescription}>{task.description}</p>
        </div>

        <div className={styles.cardRewardContainer}>
          <p className={styles.cardStatLabel}>Нагорода: </p>
          <div className={styles.cardReward}>
            <p className={styles.cardStat}>{task.rewardXp} XP</p>
            <p className={styles.cardStat}>{task.rewardCoins} монет</p>
          </div>

          <StatusSelect />
        </div>

        <div className={styles.subtasksContainer}>
          <h3 className={styles.subtasksTitle}>Завдання:</h3>
          <ul className={styles.subtaskList}>
            {task.subtasks.map(subtask => (
              <li key={subtask.id} className={styles.subtaskItem}>
                <input type='checkbox' defaultChecked={subtask.isCompleted} />
                <span>{subtask.text}</span>
              </li>
            ))}
          </ul>
          <Button children='Додати завдання' />
        </div>
      </div>
    </div>
  )
}
