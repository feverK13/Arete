import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import QuoteBlock from '../components/home/QuoteBlock'
import XPBar from '../components/home/XPBar.jsx'
import Button from '../components/ui/Button.jsx'
import { fetchUserData } from '../store/apiData.js'
import { addXp } from '../store/userSlice.js'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserData(1))
  })

  const { name, balance } = useSelector(state => state.user)
  return (
    <div className={styles.homeContainer}>
      <header className={styles.homeHeader}>
        <div className={styles.headerInfo}>
          <h1 className={styles.headerTitle}>Arete</h1>
          <p className={styles.headerSubtitle}>Реалізовуй свої мрії через пристрасть та гру</p>
        </div>

        <div className={styles.headerActions}>
          <QuoteBlock />
          <Button children='До Завдань' />
        </div>

        <div className={styles.xpBar}>
          <XPBar />
        </div>
      </header>

      <Button children={'Збільшити досвід'} onClick={() => dispatch(addXp())} />

      <div>
        <h3>Ласкаво просимо, {name}!</h3>
        <p>Ваш баланс: {balance} монет</p>
      </div>

      <main className={styles.homeWorkspace}></main>
    </div>
  )
}
