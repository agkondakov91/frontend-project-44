import readlineSync from 'readline-sync'
import { getRandomNumber } from '../index.js'

const isPrime = (num) => {
  if (num <= 1) return 'no'
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no'
    }
  }

  return 'yes'
}

export const askQuestion = () => {
  const randomNumber = getRandomNumber(1, 100)
  const answer = readlineSync
    .question(`Question: ${randomNumber}\nYour answer: `)
    .toLowerCase()
  return { answer, questionData: randomNumber }
}

export const checkAnswer = (answer, questionData, userName) => {
  const correctAnswer = isPrime(questionData)
  if (answer !== 'yes' && answer !== 'no') {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    )
    console.log(`Let's try again, ${userName}!`)
    return false
  }

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
