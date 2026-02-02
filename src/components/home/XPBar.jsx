import { useSelector } from 'react-redux'

import styles from './XPBar.module.css'

export default function XPBar() {
  const { currentXp, currentLvl } = useSelector(state => state.user)

  const maxXp = Math.round(100 * Math.pow(1.25, currentLvl))
  const fillPercentage = Math.min((currentXp / maxXp) * 100, 100)

  return (
    <div className={styles.xpBarBlock}>
      <div className={styles.stats}>
        <p className={styles.statInfo}>
          Your LvL:{'  '}
          <span style={{ fontSize: 'var(--font-base)', fontWeight: 800 }}>{currentLvl}</span>
        </p>
        <p className={styles.statInfo}>
          {currentXp} / {maxXp}
        </p>
      </div>

      <div className={styles.xpFillFrame}>
        <div className={styles.xpFill} style={{ width: `${fillPercentage}%` }}></div>
      </div>
    </div>
  )
}
