import Select from 'react-select'

import styles from './StatusSelect.module.css'

export default function StatusSelect({ className, currentStatus, onChange }) {
  const statusOptions = [
    { value: 'TODO', label: 'У черзі' },
    { value: 'IN_PROGRESS', label: 'В процесі' },
    { value: 'DONE', label: 'Завершено' },
  ]

  const selectedOption =
    statusOptions.find(option => option.value === currentStatus) || statusOptions[0]

  return (
    <Select
      className={styles.statusSelect}
      classNamePrefix='custom-select'
      value={selectedOption}
      onChange={selected => onChange(selected.value)}
      options={statusOptions}
      isSearchable={false}
    />
  )
}
