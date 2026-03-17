import { useState } from 'react'

import TaskCard from './TaskCard'
import styles from './TaskGallery.module.css'
import TaskModal from './TaskModal'

export default function TaskGallery() {
  const tasks = [
    {
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
    },
    {
      id: '2',
      title: 'Працювати над однією ціллю, зате мати найкращий результат хоч один',
      description: 'Прочитати документацію про компоненти, пропси та стейти. Зробити конспект.',
      status: 'TODO',
      rewardXp: 80,
      rewardCoins: 15,
      subtasks: [
        { id: 'sub-1', text: 'Прочитати про useState', isCompleted: true },
        { id: 'sub-2', text: 'Розібратися з useEffect', isCompleted: false },
        { id: 'sub-3', text: 'Створити тестовий компонент', isCompleted: false },
      ],
    },
    {
      id: '3',
      title: 'Нарешті стати нормальним активним девом блет',
      description: 'Прочитати документацію про компоненти, пропси та стейти. Зробити конспект.',
      status: 'TODO',
      rewardXp: 80,
      rewardCoins: 15,
      subtasks: [
        { id: 'sub-1', text: 'Прочитати про useState', isCompleted: true },
        { id: 'sub-2', text: 'Розібратися з useEffect', isCompleted: false },
        { id: 'sub-3', text: 'Створити тестовий компонент', isCompleted: true },
        { id: 'sub-4', text: 'Прочитати про useState', isCompleted: true },
        { id: 'sub-5', text: 'Розібратися з useEffect', isCompleted: false },
        { id: 'sub-6', text: 'Створити тестовий компонент', isCompleted: true },
      ],
    },
    {
      id: '4',
      title: 'Робити те що треба, і так далі',
      description:
        'Прочитати документацію про компоненти, пропси та стейти. Зробити конспект. І так далі, і так далі, далі далі дааааалі. . . Сельвадор Далі?',
      status: 'TODO',
      rewardXp: 80,
      rewardCoins: 15,
      subtasks: [
        { id: 'sub-1', text: 'Прочитати про useState', isCompleted: false },
        { id: 'sub-2', text: 'Розібратися з useEffect', isCompleted: false },
        { id: 'sub-3', text: 'Створити тестовий компонент', isCompleted: false },
        { id: 'sub-1', text: 'Прочитати про useState', isCompleted: true },
        { id: 'sub-2', text: 'Розібратися з useEffect', isCompleted: false },
      ],
    },
  ]

  const [openedTask, setOpenedTask] = useState(null)

  return (
    <section className={styles.galleryContainer}>
      <div className={styles.tasksGrid}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onOpen={() => setOpenedTask(task)} />
        ))}
      </div>

      {openedTask && (
        <div className={styles.modalOverlay}>
          <TaskModal task={openedTask} onClose={() => setOpenedTask(null)} />
        </div>
      )}
    </section>
  )
}
