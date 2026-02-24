export const calculateMaxXp = currentLvl => {
  Math.round(100 * Math.pow(1.25, currentLvl))
}

export const grantReward = (userStats, reward) => {
  let newXp = userStats.currentXp + reward.xp
  let newBalance = userStats.balance + reward.coins
  let newLvl = userStats.currentLvl

  let maxXp = calculateMaxXp(newLvl)

  while (newXp >= maxXp) {
    newXp -= maxXp
    newLvl += 1
    maxXp = calculateMaxXp(newLvl)
  }

  return {
    currentXp: newXp,
    balance: newBalance,
    currentLvl: newLvl,
  }
}
