import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { createTaskThunk, getTasksThunk } from '../../../store/tasksSlice'
import Button from '../../ui/Button'
import TaskCard from './TaskCard'
import styles from './TaskGallery.module.css'
import TaskModal from './TaskModal'

export default function TaskGallery() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  useEffect(() => {
    if (currentUser) {
      dispatch(getTasksThunk(currentUser.id))
    }
  }, [currentUser, dispatch])

  const tasks = useSelector(state => state.tasks.items)
  const [openedTaskId, setOpenedTaskId] = useState(null)
  const currentModalTask = tasks.find(task => task.id === openedTaskId)

  const handleCreateTask = async () => {
    if (!currentUser) return

    const newTaskData = {
      title: 'Нове завдання',
      description: 'Напишіть детальний опис чого саме ви хочете досягти . . .',
      status: 'to-do',
      subtasks: [
        {
          id: Date.now().toString(),
          text: 'Нова підзадача',
          isCompleted: false,
        },
      ],
    }

    try {
      const newTask = await dispatch(
        createTaskThunk({ userId: currentUser.id, newTaskData })
      ).unwrap()
      setOpenedTaskId(newTask.id)
    } catch (error) {
      console.error('Помилка створення завдання:', error)
    }
  }

  return (
    <section className={styles.galleryContainer}>
      <div className={styles.tasksGrid}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onOpen={() => setOpenedTaskId(task.id)} />
        ))}

        <Button className={styles.addTaskBtn} children={'+'} onClick={handleCreateTask} />
      </div>

      {openedTaskId && (
        <div className={styles.modalOverlay}>
          <TaskModal task={currentModalTask} onClose={() => setOpenedTaskId(null)} />
        </div>
      )}
    </section>
  )
}
