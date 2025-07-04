import { randomInt } from 'crypto'
import readlineSync from 'readline-sync'

export const greetingUser = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}

const getRandomNumber = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min
  return randomInt(min, max + 1)
}

const isEven = (num) => {
  return num % 2 === 0 ? 'yes' : 'no'
}

export const askQuestion = () => {
  const randomNumber = getRandomNumber(1, 100)
  const answer = readlineSync
    .question(`Question: ${randomNumber}\nYour answer: `)
    .toLowerCase()
  return { answer, randomNumber }
}

export const checkAnswer = (answer, randomNumber, userName) => {
  const correctAnswer = isEven(randomNumber)
  if (answer !== 'yes' && answer !== 'no') {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    )
    console.log(`Let's try again, ${userName}`)
    return false
  }

  if (answer === correctAnswer) {
    console.log('Correct!')
    return true
  }

  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  )
  console.log(`Let's try again, ${userName}`)
  return false
}

export const playGame = () => {
  const round = 3
  const userName = greetingUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let correctAnswer = 0
  while (correctAnswer < round) {
    const { answer, randomNumber } = askQuestion()
    if (!checkAnswer(answer, randomNumber, userName)) {
      return
    }
    correctAnswer += 1
  }

  console.log(`Congratulations, ${userName}!`)
}
