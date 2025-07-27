import readlineSync from 'readline-sync'
import { randomInt } from 'crypto'

export const greetingUser = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}

export const getRandomNumber = (min, max) => {
  return randomInt(min, max + 1)
}

export const printResult = (answer, correctAnswer, userName) => {
  if (answer === correctAnswer) {
    console.log('Correct!')
    return true
  }
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  )
  console.log(`Let's try again, ${userName}!`)
  return false
}

export const playGame = (askQuestion, checkAnswer, rules) => {
  const rounds = 3
  const userName = greetingUser()
  console.log(rules)
  let correctAnswers = 0
  while (correctAnswers < rounds) {
    const { answer, questionData } = askQuestion()
    if (!checkAnswer(answer, questionData, userName)) {
      return
    }
    correctAnswers += 1
  }

  console.log(`Congratulations, ${userName}!`)
}
