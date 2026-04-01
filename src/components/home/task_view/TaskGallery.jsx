import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { getTasksThunk } from '../../../store/tasksSlice'
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
  }, [])

  const tasks = useSelector(state => state.tasks.items)
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
