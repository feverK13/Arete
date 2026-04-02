const apiUrl = 'https://698a159ac04d974bc6a14c92.mockapi.io/api/ver1/users'

export const fetchUserData = async userId => {
  const response = await fetch(`${apiUrl}/${userId}`)
  const userData = await response.json()

  if (response.ok) {
    return userData
  } else {
    throw new Error('Не вдалося зареєструвати користувача')
  }
}

export const fetchUserByEmail = async email => {
  const response = await fetch(`${apiUrl}?email=${encodeURIComponent(email)}`)
  const users = await response.json()

  if (response.ok) {
    return users.length > 0 ? users[0] : null
  } else {
    throw new Error('Не вдалося знайти користувача')
  }
}

export const createUser = async userData => {
  const startUserData = {
    currentXp: 0,
    currentLvl: 1,
    balance: 0,
    ...userData,
  }
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(startUserData),
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Не вдалося створити користувача')
  }
}

export const updateUser = async (userId, updatedData) => {
  const response = await fetch(`${apiUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Не вдалося оновити дані користувача')
  }
}

export const fetchTasks = async userId => {
  const response = await fetch(`${apiUrl}/${userId}/tasks`)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Не вдалося отримати завдання користувача')
  }
}

export const createTask = async (userId, newTaskData) => {
  const response = await fetch(`${apiUrl}/${userId}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTaskData),
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Не вдалося створити нове завдання')
  }
}

export const updateTask = async (userId, taskId, updatedTaskData) => {
  const taskUrl = `https://698a159ac04d974bc6a14c92.mockapi.io/api/ver1/users/${userId}/tasks/${taskId}`
  const response = await fetch(taskUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTaskData),
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Не вдалося оновити завдання')
  }
}
