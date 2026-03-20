import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import styles from './InlineEdit.module.css'

export default function InlineEdit({ value, onChange, className }) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(value)
  const textareaRef = useRef(null)

  const handleBlur = () => {
    setIsEditing(false)
    onChange(text)
  }

  useLayoutEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [text, isEditing])

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      const textLength = textareaRef.current.value.length
      textareaRef.current.setSelectionRange(textLength, textLength)
    }
  }, [isEditing])

  return isEditing ? (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={e => setText(e.target.value)}
      onBlur={handleBlur}
      autoFocus
      rows={1}
      className={styles.editInput + ' ' + className}
    />
  ) : (
    <span
      onClick={() => setIsEditing(true)}
      className={className}
      onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(19, 19, 19, 0.1)')}
      onMouseOut={e => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      {text}
    </span>
  )
}
