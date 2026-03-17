import { useState } from 'react'
import Select from 'react-select'

import styles from './StatusSelect.module.css'

export default function StatusSelect({ className, status, onChange }) {
  const statusOptions = [
    { value: 'TODO', label: 'У черзі' },
    { value: 'IN_PROGRESS', label: 'В процесі' },
    { value: 'DONE', label: 'Завершено' },
  ]

  const [selectedOption, setSelectedOption] = useState(statusOptions[0])

  return (
    <Select
      className={styles.statusSelect}
      classNamePrefix='custom-select'
      value={selectedOption}
      onChange={setSelectedOption}
      options={statusOptions}
      isSearchable={false}
    />
  )
}
