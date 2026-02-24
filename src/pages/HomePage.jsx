import { useDispatch } from 'react-redux'

import QuoteBlock from '../components/home/QuoteBlock'
import XPBar from '../components/home/XPBar.jsx'
import Button from '../components/ui/Button.jsx'
// import { addXp } from '../store/userSlice.js'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  const dispatch = useDispatch()
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

      {/* <Button children={'Збільшити досвід'} onClick={() => dispatch(addXp())} /> */}

      <main className={styles.homeWorkspace}></main>
    </div>
  )
}
