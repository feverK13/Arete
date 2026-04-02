import StatusSelect from '../../ui/StatusSelect'
import styles from './TaskCard.module.css'

export default function TaskCard({ task, onOpen }) {
  const totalSubtasks = task.subtasks.length
  const finishedTasks = task.subtasks.filter(subtask => subtask.isCompleted).length

  const statusOptions = [
    { value: 'TODO', label: 'У черзі' },
    { value: 'IN_PROGRESS', label: 'В процесі' },
    { value: 'DONE', label: 'Завершено' },
  ]

  function getStatusLabel(statusValue) {
    const foundOption = statusOptions.find(option => option.value === statusValue)
    return foundOption ? foundOption.label : 'Не обрано'
  }

  return (
    <>
      <div
        className={styles.taskCard}
        onClick={onOpen}
        title='Натисни для детального ознайомлення чи редагування'
      >
        <h3 className={styles.cardTitle}>{task.title}</h3>

        <div className={styles.cardProgress}>
          <p className={styles.cardStat}>
            <span className={styles.cardStatLabel}>Виконано: </span>
            {finishedTasks} / {totalSubtasks}
          </p>
          <div className={styles.progressBar}>
            {task.subtasks.map(subtask => {
              return (
                <div
                  key={subtask.id}
                  className={subtask.isCompleted ? styles.filledPoint : styles.emptyPoint}
                  title={subtask.text}
                ></div>
              )
            })}
          </div>
        </div>

        <div className={styles.cardRewardContainer}>
          <p className={styles.cardStatLabel}>Нагорода: </p>
          <div className={styles.cardReward}>
            <p className={styles.cardStat}>{task.rewardXp} XP</p>
            <p className={styles.cardStat}>{task.rewardCoins} монет</p>
          </div>
        </div>

        <div className={styles.cardStatBlock}>
          <p className={styles.cardStatLabel}>Статус: </p>
          <p className={styles.cardStat}>{getStatusLabel(task.status)}</p>
        </div>
      </div>
    </>
  )
}
