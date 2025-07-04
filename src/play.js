export const playGame = (greeting, ask, check) => {
  let winGames = 0
  const userName = greeting()
  while (winGames < 3) {
    const answer = ask()
    if (check(answer)) {
      winGames += 1
    }
    else {
      winGames = 0
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
